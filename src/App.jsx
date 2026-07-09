import Header from "./Header"
import Conteudo from "./Conteudo"
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