import "./Projetos.css"

function Projetos(props){
    const projetos = props.projetos
    console.log(projetos)

    return (
        <section className="secao-projetos">
            <h2>Projetos</h2>
            <ul className="lista-projetos">
                {
                    projetos.map((projetoAtual) => {
                        return(
                            <li>
                                <a href={projetoAtual.linkDoGithub}>Link pro github</a>
                                <img src={projetoAtual.caminhoDaImg} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Projetos;