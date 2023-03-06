import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import { BodyPartsContextProvider } from "./context/BodyPartsContext";
import { SelectedBodyPartContextProvider } from "./context/SelectedBodyPartContext";
import { ExercisesContextProvider } from "./context/ExercisesContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <ExercisesContextProvider>
         <SelectedBodyPartContextProvider>
           <BodyPartsContextProvider>
               <App/>
           </BodyPartsContextProvider>
        </SelectedBodyPartContextProvider>
       </ExercisesContextProvider>
    </React.StrictMode>
  );
