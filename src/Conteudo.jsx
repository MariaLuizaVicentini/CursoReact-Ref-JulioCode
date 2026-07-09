import React from "react";
import { useState } from "react";

function Conteudo(){
    const [nome, setNome] = useState("Nome inicial")

    function clicouNoBotao(){
        setNome("Novo nome")
    }

    return(
        <main>
            <h2>Meu nome é seu_nome</h2>
            <h3>Sou dev full stack</h3>
            <button onClick={clicouNoBotao}>
                Clique aqui pra exibir teu nome ze ruela
            </button>
            <p> {nome}</p>
        </main>
    )
}

export default Conteudo