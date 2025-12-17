import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-illustration">
          <svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" className="nf-circle" />
            <path d="M70 85 L90 105 M90 85 L70 105" className="nf-x" />
            <path d="M110 85 L130 105 M130 85 L110 105" className="nf-x" />
            <circle cx="100" cy="130" r="8" className="nf-dot" />
          </svg>
        </div>

        <h1 className="nf-title">Página no encontrada</h1>
        <p className="nf-text">
          La ruta a la que intentas acceder no existe o ha sido movida.
        </p>

        <Link to="/" className="nf-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
