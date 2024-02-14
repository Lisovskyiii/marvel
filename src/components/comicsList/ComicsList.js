import { useState, useRef, useEffect } from "react";
import "./comicsList.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelService";
import { Link } from "react-router-dom";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(50);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  const itemRefs = useRef([]);

  useEffect(() => {
    onRequest(offset, true);
    console.log("hi");
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onComicsLoaded);
  };

  const onComicsLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }
    setComics((comics) => [...comics, ...newComicsList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setCharEnded(ended);
  };

  const onFocusItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("comics__item_selected")
    );
    itemRefs.current[id].classList.add("comics__item_selected");
  };

  function renderComics(array) {
    const items = array.map((item, i) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="comics__item"
          tabIndex={0}
          key={item.id}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          onClick={() => onFocusItem(i)}
        >
          <Link to={`/comics/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="comics__item-img"
              style={imgStyle}
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.prices}</div>
          </Link>
        </li>
      );
    });

    return <ul className="comics__grid">{items}</ul>;
  }

  const items = renderComics(comics);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {items}
      {errorMessage}
      {spinner}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        onClick={() => onRequest(offset, false)}
        style={{ display: charEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
