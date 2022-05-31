import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";

//O componente "Routes" vai ter vários componentes "Route" dentro, os quais vão redirecionar para certas páginas
//no Route passo o path que é a página que ele vai querer redirecionar, e o element é o componente que ele vai renderizar quando for para aquela rota

//no exemplo do Route do Cuisine, onde temos o path="/cuisine/:type", basicamente dizemos que poderá ter algo após o cuisine, isto é, podemos redirecionar para cuisine/italian ou cuisine/american, etc... ou seja, tornamos este routing dinâmico

//no caso do Searched "path="/searched/:search"" ele vai basicamente procurar pelo que colocamos no input
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
