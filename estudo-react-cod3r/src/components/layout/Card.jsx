
import './Card.css'

function Card(props) {

    // Estamos definindo nas linhas de código abaixo que as cores dos nossos cards serão passadas via "props", dentro do nosso componente principal, "App". Caso nenhuma cor seja passada como parâmetro, estamos definindo que a cor padrão será "black";

    // Para isso, criamos um objeto com as propriedades "backgroundColor" e "borderColor", e definimos que os seus valores serão iguais aos passados em "bgcolor" e "bordercolor", respectivamente;

    const cardStyle = {
        backgroundColor: props.bgcolor || 'black',
        borderColor: props.bordercolor || 'black'
    }

    return (
        <div className='card' style={cardStyle}> {/*Definimos aqui que o style das nossas divs "card" serão definidos dentro do nosso objeto "cardStyle" */}
            <div className='title'><h2>{props.titulo}</h2></div>
            <div className='content'>{props.children}</div> {/*Quando utilizamos "props.children", conseguimos, dentro da nossa aplicação principal, renderizar nesta div outros componentes da nossa aplicação.*/}
        </div>
    )
}

export default Card