import { useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ padding: "1rem" }}>
        <Timeline />      
      </main>
    </>
  );
}
