import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../views/home";
import Queue from "../views/queue";
import Cadastro from "../views/cadastro";
import Arrecadacao from "../views/arrecadacao";
import WebCam from "../components/webCam";

const RoutesLink: React.FC = () => (
  <Routes>
    {/* <Route path="/" element={<Home />}> */}
    <Route path="/" element={<Home />} />
    <Route path="lista" element={<Queue />} />
    <Route path="cadastro" element={<Cadastro />} />
    <Route path="arrecadacao" element={<Arrecadacao />} />
    <Route path="webcam" element={<WebCam />} />
    <Route path="*" element={<NoMatch />} />
    {/* </Route> */}
  </Routes>
  //   <Routes>
  //   <Route index element={<Home />} />
  //   <Route path="queue" element={<Queue />} />
  //   <Route path="*" element={<Home />} />
  // </Routes>
);
export default RoutesLink;

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
