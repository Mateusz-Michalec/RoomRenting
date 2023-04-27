import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Attractions = lazy(() => import("./pages/Attractions"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Navbar />}>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="loader-fullscreen">
                    <div className="loader" />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/pokoje"
            element={
              <Suspense
                fallback={
                  <div className="loader-fullscreen">
                    <div className="loader" />
                  </div>
                }
              >
                <Rooms />
              </Suspense>
            }
          />

          <Route
            path="/atrakcje"
            element={
              <Suspense
                fallback={
                  <div className="loader-fullscreen">
                    <div className="loader" />
                  </div>
                }
              >
                <Attractions />
              </Suspense>
            }
          />

          <Route
            path="/galeria"
            element={
              <Suspense
                fallback={
                  <div className="loader-fullscreen">
                    <div className="loader" />
                  </div>
                }
              >
                <Gallery />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
