import { Link } from "react-router-dom";
import { ARTISTS } from "./artist-data";
import "./styles.css";

export default function ArtistList() {
  return (
    <ul className="artist-list">
      {ARTISTS.map((artist) => (
        <li key={artist.id} className="artist-item">
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
        </li>
      ))}
    </ul>
  );
}
