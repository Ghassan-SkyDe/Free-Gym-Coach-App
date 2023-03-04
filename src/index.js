import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import { BodyPartsContextProvider } from "./context/bodyParts";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
       <BodyPartsContextProvider>
           <App/>
       </BodyPartsContextProvider>
    </React.StrictMode>
  );
