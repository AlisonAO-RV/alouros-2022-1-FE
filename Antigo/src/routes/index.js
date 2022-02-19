import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home/index";

const Routes2 = () => (
  <Routes>
    <Route path="/home" component={Home} />
    {/* <Redirect from="*" to="/" /> */}
  </Routes>
);

export default Routes2;
