import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MovieComponent from "./MovieComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieComponent />
  </StrictMode>
);
