import React from "react"
import "./Header.css"

function Header(){
  return(
    <header className="header">
      <h1>Seu_nome </h1>
      <ul className="links">
        <li>
          <a href="https://google.com">
            Google 
          </a>
        </li>
        <li>
          <a href="https://youtube.com"> 
            Youtube
          </a>
          </li>
      </ul>
    </header>
  )
}

export default Header