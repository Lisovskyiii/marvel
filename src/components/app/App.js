import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { MainPage } from "../pages/MainPage";
import { ComicsPage } from "../pages/ComicsPage";
import { Page404 } from "../pages/Page404";
import { SingleComicPage } from "../pages/singleComic";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/marvel" element={<MainPage />}></Route>
            <Route path="/comics" element={<ComicsPage />}></Route>
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404></Page404>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
