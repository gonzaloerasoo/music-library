import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Artists from "./pages/Artists/Artist-Lists/Artists";
import ArtistDetail from "./pages/Artists/Artist-Details/ArtistDetail";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:artistId" element={<ArtistDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
