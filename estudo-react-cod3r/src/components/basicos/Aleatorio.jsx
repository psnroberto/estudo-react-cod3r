
import { useState } from 'react'

function Aleatorio(props) {

    const [aleatorio, setAleatorio] = useState()

    function gerarNumero() {
        setAleatorio(Math.floor(Math.random() * (props.max - props.min + 1)) + props.min)
    }

    return (
        <div>
            <p><strong>Clique no botão abaixo para gerar um número aleatório</strong>:</p>
            <p>Valor mínimo: {props.min}</p>
            <p>Valor máximo: {props.max}</p>
            <p>Valor escolhido: {aleatorio}</p>
            <button onClick={gerarNumero}>Gerar Número!</button>
        </div>
    )
}

export default Aleatorio