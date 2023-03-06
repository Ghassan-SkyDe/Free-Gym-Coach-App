import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import { BodyPartsContextProvider } from "./context/BodyPartsContext";
import { SelectedBodyPartContextProvider } from "./context/SelectedBodyPartContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <SelectedBodyPartContextProvider>
          <BodyPartsContextProvider>
              <App/>
          </BodyPartsContextProvider>
       </SelectedBodyPartContextProvider>
    </React.StrictMode>
  );
