import { useState } from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : "light"}>
            <h2>Modo: {darkMode ? "Oscuro" : "Claro"}  </h2>
            <button onClick={() => setDarkMode(!darkMode)}>Cambiar Modo</button>
        </div>
    );
    
}
export default ThemeSwitcher;