import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { request, process, clearError, setProcess } = useHttp();

  const _apiKey = "apikey=f0f3fb2c26fc8c94303bfb52287e6835";
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset) => {
    const res = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComic);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      title: comic.title,
      pageCount: comic.pageCount
        ? `Page: ${comic.pageCount}`
        : "No information about the number of pages",
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
      description: comic.description || "There is no description",
      language: comic.textObjects.language || "en-us",
      prices: comic.prices[0].price
        ? `${comic.prices[0].price}$`
        : "Not available",
    };
  };

  return {
    process,
    setProcess,
    getAllCharacters,
    getCharacter,
    clearError,
    getAllComics,
    getComic,
    getCharacterByName,
  };
};

export default useMarvelService;
