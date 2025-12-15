import { useParams } from 'react-router-dom';
import { ARTIST_DATA } from './Artists';

export default function ArtistDetail() {
  const { artistId } = useParams();
  const artist = ARTIST_DATA.find((a) => a.id === artistId);

  if (!artist) {
    return <h2>Artista no encontrado</h2>;
  }

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>Género: {artist.genre}</p>
    </div>
  );
}
