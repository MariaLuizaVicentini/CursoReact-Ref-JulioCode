import React from "react";
import { useState } from "react";

function Conteudo(){
    const [nome, setNome] = useState("Nome inicial")
    const [numero, setNumero] = useState(0)


    function clicouNoBotao(){
        setNome("Novo nome")
        setNumero(numero + 1)
    }

    return(
        <main>
            <h2>Meu nome é seu_nome</h2>
            <h3>Sou dev full stack</h3>
            <button onClick={clicouNoBotao}>
                Clique aqui pra exibir teu nome ze ruela
            </button>
            <p> {nome}</p>
            <h2> {numero} </h2>
        </main>
    )
}

export default Conteudo