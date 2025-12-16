import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ARTISTS } from "../../components/artistList/artist-data";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const closeModal = () => {
    setShowModal(false);
    setSelectedId("");
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

      <button onClick={() => setShowModal(true)}>
        Buscar a mi Artista Favorito
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Selecciona un Artista</h2>

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
