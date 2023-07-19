
function ComParametro(props) {

    const situacao = props.nota >= 7 ? 'Aprovado!' : 'Reprovado!' 

    return (
        <div>
            <p><strong>{props.titulo}</strong></p>
            <p>O aluno {props.aluno} tem nota igual a {props.nota}</p>
            <p>O aluno está {situacao}</p>
        </div>
    )
}

export default ComParametro