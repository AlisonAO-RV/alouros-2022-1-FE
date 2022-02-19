import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

// import "./App.css";

const App = memo(() => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
});

export default App;
