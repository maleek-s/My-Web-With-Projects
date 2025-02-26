import React from "react";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";


function App(props) {
  return (
    <div>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
