import { useEffect } from "react";

type Props = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: Props) {
  
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="app-header">
      <div className="logo">🚀 ISRO Timeline</div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}
