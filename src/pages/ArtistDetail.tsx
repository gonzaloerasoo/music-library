import { useParams } from 'react-router-dom';
import { ARTIST_DATA } from './Artists';

export default function ArtistDetail() {
  const { artistId } = useParams();
  const artist = ARTIST_DATA.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <div className="container centered">
        <h2>Artista no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>{artist.name}</h1>
        <p><strong>Género:</strong> {artist.genre}</p>
      </div>
    </div>
  );
}
