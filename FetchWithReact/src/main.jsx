import React from "react";
import ReactDOM from "react-dom/client";
import MovieComponent from "./MovieComponent.jsx"; // Assicurati che il path sia corretto
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieComponent />
  </React.StrictMode>
);
