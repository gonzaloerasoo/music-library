import { Link } from 'react-router-dom';

const ARTIST_DATA = [
  { id: '1', name: 'Extremoduro', genre: 'Rock' },
  { id: '2', name: 'Michael Jackson', genre: 'Pop' },
  { id: '3', name: 'Louis Armstrong', genre: 'Jazz' },
];

export default function Artists() {
  return (
    <div className="container">
      <h1>Lista de Artistas</h1>
      <ul>
        {ARTIST_DATA.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              {artist.name} — <span style={{ color: '#666' }}>{artist.genre}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ARTIST_DATA };
