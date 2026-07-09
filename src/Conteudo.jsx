import React from "react";

function Conteudo(){
    function clicouNoBotao(){
        alert("Clicou no botao")
    }

    return(
        <main>
            <h2>Meu nome é seu_nome</h2>
            <h3>Sou dev full stack</h3>
            <button onClick={clicouNoBotao}>
                Clique aqui pra exibir teu nome ze ruela
            </button>
        </main>
    )
}

export default Conteudo