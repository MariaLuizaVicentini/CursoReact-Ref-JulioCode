import React from "react"
import "./Header.css"

function Header(){
  return(
    <header className="header">
      <h1>@maluvicentinidev</h1>
      <ul className="links">
        <li>
          <a href="">
            Home 
          </a>
        </li>

        <li>
          <a href=""> 
            Sobre
          </a>
          </li>

        <li>
          <a href=""> 
            Projetos
          </a>
          </li>
      </ul>
    </header>
  )
}

export default Header