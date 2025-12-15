import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/artists">Artistas</Link>
    </nav>
  );
}
