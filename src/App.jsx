import Conteudo from "./components/Conteudo/Conteudo";
import Header from "./components/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import "./App.css";

import { useState } from "react";

function App() {
  const [projetos, setProjetos] = useState([
    {
      linkDoGitHub: "https://github.com",
      caminhoDaImg: "src/assets/facebook.png",
    },
    {
      linkDoGitHub: "https://github.com",
      caminhoDaImg: "src/assets/tesla.png",
    },
    { linkDoGitHub: "https://github.com", caminhoDaImg: "src/assets/vite.png" },
  ]);

  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <Projetos projetos={projetos} />
      <footer className="footer">
        <div>
          <h4>Contato</h4>
          <p>vicentinimalu1@gmail.com</p>
          <p>19 99999-9999</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
