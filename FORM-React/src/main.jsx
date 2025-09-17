import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppForm from "./AppForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppForm />
  </StrictMode>
);
