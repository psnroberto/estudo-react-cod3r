
import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='title'><h2>{props.titulo}</h2></div>
            <div className='content'>{props.children}</div> {/*Quando utilizamos "props.children", conseguimos, dentro da nossa aplicação principal, renderizar nesta div outros componentes da nossa aplicação.*/}
        </div>
    )
}

export default Card