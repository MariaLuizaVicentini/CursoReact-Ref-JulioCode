import Conteudo from "./components/Conteudo/Conteudo"
import Header from "./components/Header/Header"
import Projetos from "./components/Projetos/Projetos"
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header/>
      <Conteudo/>
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