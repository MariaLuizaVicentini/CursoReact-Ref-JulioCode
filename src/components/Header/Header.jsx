import React from "react"
import "./Header.css"

function Header(){
  let links = [
    {href: "https://youtube.com", nome: "Home"},
    {href: "https://google.com", nome: "Sobre mim"},
    {href: "https://facebook.com", nome: "Projetos"}
  ]

  return(
    <header className="header">
      <h1>Seja Bem Vindo (a)</h1>
      <ul className="links">
        {
          links.map((linkAtual) => {
           return(
            <li>
              <a href={linkAtual.href}> {linkAtual.nome} </a>
            </li>
           )
              
          })
        }
      </ul>
    </header>
  )
}

export default Header