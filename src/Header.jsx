import React from "react"
import "./Header.css"

function Header(){
  let links = ["Home", "Sobre mim", "Projetos"]

  return(
    <header className="header">
      <h1>@maluvicentinidev</h1>
      <ul className="links">
        {
          links.map((linkAtual) => {
            
          })
        }
      </ul>
    </header>
  )
}

export default Header