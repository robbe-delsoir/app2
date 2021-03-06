import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import App from "./App";

const rootElement = document.getElementById("root");
initializeIcons();
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
