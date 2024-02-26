import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
            title="Toggle theme"
        >
            {theme === "dark" ? (
                <FiSun size={18} />
            ) : (
                <FiMoon size={18} />
            )}
        </button>
    );
}
