import { useParams, Link } from "react-router-dom";
import { ARTISTS } from "../../../components/artistList/artist-data";
import "./styles.css";

export default function ArtistDetail() {
  const { artistId } = useParams();
  const artist = ARTISTS.find((a) => a.id === artistId);

  return (
    <div className="artist-wrapper">
      <div className="artist-card">
        <div className="artist-header-row">
          <h1>{artist?.name || "Artista no encontrado"}</h1>
          <Link to="/artists" className="back-icon inline">
            <svg viewBox="0 0 24 24">
              <path d="M15 6 L9 12 L15 18" />
            </svg>
          </Link>
        </div>

        {artist && (
          <p>
            <strong>Género:</strong> {artist.genre}
          </p>
        )}
      </div>
    </div>
  );
}
