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
            <section className="conteudo-textual" >
                <h2 className="texto-introducao">
                    Meu nome é Malu Vicentini
                </h2>
                <h3>
                    Sou Desenvolvedora Web
                </h3>
                <button className="botao-saiba-mais" onClick={clicouNoBotao}>
                    Saiba mais
                </button>
                <article>
                    {artigo}
                </article>
            </section>

            <img className="ilustracao" src="src/assets/programmer.png" alt="" />
        </main>
    )
}

export default Conteudo