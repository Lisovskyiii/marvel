import { useState } from "react";
import ComicsList from "../../comicsList/ComicsList";
import { ErrorBoundary } from "../../errorBoundary/ErrorBoundary";
import AppBanner from "../../appBanner/AppBanner";

export const ComicsPage = () => {
  const [selectedComic, setComic] = useState(null);

  const onComicSelected = (id) => {
    setComic(id);
  };

  return (
    <>
      <AppBanner></AppBanner>
      <ErrorBoundary>
        <ComicsList></ComicsList>
      </ErrorBoundary>
    </>
  );
};
