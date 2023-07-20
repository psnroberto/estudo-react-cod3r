
function FamiliaMembro(props) {
    return (
        <>
            <p><strong>{props.nome} {props.sobrenome}</strong> tem {props.idade} anos e {props.altura} metros de altura!
            </p>
        </>
    )
}

export default FamiliaMembro