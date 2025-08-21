import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000, // animation duration in ms
  once: true      // whether animation should happen only once
});



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
