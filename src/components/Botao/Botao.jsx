import "./Botao.css"

function Botao(props) {
    return (
        <button style={{backgroundColor: props.cor}}> 
            {props.texto} 
        </button>
    )

}
export default Botao