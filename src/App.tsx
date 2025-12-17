import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import Artists from "./pages/Artists/Artist-Lists/Artists";
import ArtistDetail from "./pages/Artists/Artist-Details/ArtistDetail";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/navbar/Navbar";

import PageFade from "./components/Fades/PageFade";
import "./styles/App.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageFade>
                <Home />
              </PageFade>
            }
          />

          <Route
            path="/artists"
            element={
              <PageFade>
                <Artists />
              </PageFade>
            }
          />

          <Route
            path="/artists/:artistId"
            element={
              <PageFade>
                <ArtistDetail />
              </PageFade>
            }
          />

          <Route
            path="*"
            element={
              <PageFade>
                <NotFound />
              </PageFade>
            }
          />
        </Routes>
      </AnimatePresence>

      <footer className="footer">
        <p>© 2025 Gonzalo Eraso Lorenzo</p>
      </footer>
    </>
  );
}
