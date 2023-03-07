import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import { ExerciseContextProvider } from "./context/ExerciseContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <ExerciseContextProvider>
        <App/> 
      </ExerciseContextProvider>
    </React.StrictMode>
  );
