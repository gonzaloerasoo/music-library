import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/artists/2');
  };

  return (
    <div>
      <h1>Bienvenido a la Biblioteca de Música</h1>
      <button onClick={handleSearch}>
        Buscar mi Artista Favorito (ID 2)
      </button>
    </div>
  );
}
