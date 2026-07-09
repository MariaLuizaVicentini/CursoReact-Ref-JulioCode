import Conteudo from "./components/Conteudo/Conteudo"
import Header from "./components/Header/Header"
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header/>
      <Conteudo/>
      <footer className="footer">
        <p>
          Feito por Malu Vicentini
        </p>
        <div>

        </div>
      </footer>
    </div>
  )
}


export default App