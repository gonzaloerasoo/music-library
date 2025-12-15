import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
      <Link to="/">Inicio</Link>
      <Link to="/artists">Artistas</Link>
    </nav>
  );
}