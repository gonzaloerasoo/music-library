import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

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
