
import { useState } from 'react'
import './GeradorMegaSena.css'

function GeradorMegaSena(props) {

    const [quantidade, setQuantidade] = useState()
    let [resultado, setResultado] = useState()
    const [min, setMin] = useState()
    const [max, setMax] = useState()

    let numerosArray = []

    function gerarNumeros() {

        for (let i = 0; i <= quantidade - 1; i++) {
            let numero = Math.floor(Math.random() * (max - min + 1)) + min

            while (numerosArray.includes(numero)) {
                numero = Math.floor(Math.random() * (max - min + 1)) + min
            }

            numerosArray.push(numero)
        }

        resultado = numerosArray
        setResultado(numerosArray.join(' - '))

    }

    return (
        <div className='megasena'>

            <h2>{resultado}</h2>

            <div className='inputs'>
                <label htmlFor="quantidade">Informe quantos números serão gerados:</label>
                <input
                    type="number"
                    id='quantidade'
                    name="quantidade"
                    onChange={(event) => { setQuantidade(Number(event.target.value)) }}
                />
            </div>

            <div className='inputs'>
                <label htmlFor="min">Informe o valor mínimo:</label>
                <input
                    type="number"
                    id='min'
                    name="min"
                    onChange={(event) => { setMin(Number(event.target.value)) }}
                />
            </div>

            <div className='inputs'>
                <label htmlFor="max">Informe o valor máximo:</label>
                <input
                    type="number"
                    id='max'
                    name="max"
                    onChange={(event) => { setMax(Number(event.target.value)) }}
                />
            </div>

            <button className='button' onClick={gerarNumeros}>Gerar números!</button>

        </div>
    )
}

export default GeradorMegaSena