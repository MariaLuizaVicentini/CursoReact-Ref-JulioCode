import React, { use } from "react";
import { useState } from "react";
import "./Conteudo.css"

function Conteudo(){
    const [artigo, setArtigo] = useState("")

    function clicouNoBotao(){
        setArtigo(
            "Sou dev full stack com 2 anos de experiencia em software"
        )
    }

    return(
        <main className="conteudo" >
            <h2>Meu nome é seu_nome</h2>
            <h3>Sou dev full stack</h3>
            <button className="botao-saiba-mais" onClick={clicouNoBotao}>
                Saiba mais
            </button>
            <article>
                {artigo}
            </article>
        </main>
    )
}

export default Conteudo