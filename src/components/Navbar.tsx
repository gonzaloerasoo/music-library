import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/artists">Artistas</Link>

      <div className="theme-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}
