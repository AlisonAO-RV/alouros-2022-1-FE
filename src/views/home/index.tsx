import React, { memo } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = memo(() => {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <div>
      <h1>Home</h1>
      <Link to="cadastro/">Cadastro</Link>
    </div>
  );
});

export default Home;
