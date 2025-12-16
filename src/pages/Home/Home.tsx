import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ARTISTS } from "../../components/artistList/artist-data";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setSelectedId("");
      setClosing(false);
    }, 200);
  };

  const handleNavigate = () => {
    if (selectedId) {
      navigate(`/artists/${selectedId}`);
      closeModal();
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showModal]);

  return (
    <div className="container centered">
      <h1>Bienvenido a la Biblioteca de Música</h1>

      <button type="button" onClick={() => setShowModal(true)}>
        Buscar a mi Artista Favorito
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title">Selecciona un Artista</h2>
              <button
                className="close-x"
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                <svg className="close-icon" viewBox="0 0 24 24">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </div>

            <div className="select-wrapper">
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
              >
                <option value="">Selecciona una ID</option>
                {ARTISTS.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.id} — {artist.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancelar
              </button>

              <button
                className="confirm-btn"
                onClick={handleNavigate}
                disabled={!selectedId}
              >
                Ir al Artista
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
