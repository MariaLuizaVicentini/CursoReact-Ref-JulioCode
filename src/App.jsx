import Header from "./Header"
import Conteudo from "./Conteudo"
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header/>
      <Conteudo/>
      <footer>
        <p>
          Feito por seu_nome
        </p>
      </footer>
    </div>
  )
}


export default App