import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const Page404 = lazy(() => import("../pages/Page404"));
const SingleCharacterLayout = lazy(() =>
  import("../pages/singleCharacterLayout/index")
);
const SingleComicLayout = lazy(() => import("../pages/singleComicLayout/"));
const SinglePage = lazy(() => import("../pages/SinglePage/index"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner></Spinner>}>
            <Routes>
              <Route path="/marvel" element={<MainPage />}></Route>
              <Route path="/comics" element={<ComicsPage />}></Route>
              <Route
                path="/comics/:id"
                element={
                  <SinglePage Component={SingleComicLayout} dataType="comic" />
                }
              />
              <Route
                path="/characters/:id"
                element={
                  <SinglePage
                    Component={SingleCharacterLayout}
                    dataType="character"
                  />
                }
              />
              <Route path="*" element={<Page404></Page404>}></Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
