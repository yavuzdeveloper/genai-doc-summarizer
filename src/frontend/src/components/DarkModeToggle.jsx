import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
      {theme === "light" ? "🌙" : "🌞"}
    </div>
  );
}

export default DarkModeToggle;
