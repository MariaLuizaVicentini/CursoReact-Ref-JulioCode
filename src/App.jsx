import Conteudo from "./components/Conteudo/Conteudo"
import Header from "./components/Header/Header"
import Projetos from "./components/Projetos/Projetos"
import Botao from "./components/Botao/Botao"
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header/>
      <Conteudo/>
      <Botao cor="Azul"/>
      <Projetos/>
      <footer className="footer">
        <p>
          Feito por Malu Vicentini
        </p>

      </footer>
    </div>
  )
}


export default App