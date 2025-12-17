import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  const [themeIndex, setThemeIndex] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? 1 : stored === "sepia" ? 2 : 0;
  });

  useEffect(() => {
    document.body.classList.remove("dark-mode", "sepia-mode");

    if (themeIndex === 1) document.body.classList.add("dark-mode");
    if (themeIndex === 2) document.body.classList.add("sepia-mode");

    const theme =
      themeIndex === 0 ? "light" : themeIndex === 1 ? "dark" : "sepia";
    localStorage.setItem("theme", theme);
  }, [themeIndex]);

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/artists">Artistas</Link>

      <div className="theme-switch">
        <label className="switch">
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={themeIndex}
            onChange={(e) => setThemeIndex(Number(e.target.value))}
          />
          <span className={`slider pos-${themeIndex}`}></span>
        </label>
      </div>
    </nav>
  );
}
