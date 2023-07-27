
function Condicional(props) {

    const numVerifica = props.numero

    return (
        <>
            {
                numVerifica % 2 === 0 ?
                    <p>É par!</p> :
                    <p>É impar!</p>
            }
        </>
    )
}

export default Condicional

// Podemos renderizar determinados elementos em nossa aplicação caso uma condição seja satisfeita ou não. No exemplo acima, utilizamos os operadores ternários "?" e ":" para verificar se um número é par ou não, e renderizar um elemento parágrafo para cada condição.