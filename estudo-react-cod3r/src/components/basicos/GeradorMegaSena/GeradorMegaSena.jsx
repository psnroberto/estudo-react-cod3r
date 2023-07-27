
import { useState } from 'react'

function GeradorMegaSena(props) {

    const [quantidade, setQuantidade] = useState()
    let [resultado, setResultado] = useState()
    const [min, setMin] = useState()
    const [max, setMax] = useState()

    let numerosArray = []


    function gerarNumeros() {


        for (let i = 0; i <= quantidade - 1; i++) {
            let numero = Math.floor(Math.random() * (max - min + 1)) + min
            numerosArray.push(numero)
        }
        
        resultado = numerosArray
        setResultado(numerosArray)

        window.alert(resultado)


    }

    return (
        <div>

            <h2>{resultado}</h2>

            <label htmlFor="quantidade">Informe quantos números serão gerados:</label>
            <input
                type="number"
                id='quantidade'
                name="quantidade"
                onChange={(event) => { setQuantidade(Number(event.target.value)) }}
            />

            <label htmlFor="min">Informe o valor mínimo:</label>
            <input
                type="number"
                id='min'
                name="min"
                onChange={(event) => { setMin(event.target.value) }}
            />

            <label htmlFor="max">Informe o valor máximo:</label>
            <input
                type="number"
                id='max'
                name="max"
                onChange={(event) => { setMax(event.target.value) }}
            />

            <button onClick={gerarNumeros}>Gerar números!</button>

        </div>
    )
}

export default GeradorMegaSena