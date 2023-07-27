
import { useState } from 'react'
import './UseStateContador.css'


function UseStateContador() {

    const [numero, setNumero] = useState(0)
    const [passo, setPasso] = useState(0)

    return (
        <div className='contador'>

            <h2>{numero}</h2>

            <div className='input'>
                <label htmlFor="numero">Passo:</label>
                <input
                    type="number"
                    id='passo'
                    name='passo'
                    onChange={(event) => { setPasso(Number(event.target.value)) }}
                />
            </div>

            <div className='buttons'>
                <button onClick={() => {setNumero(numero - passo)}}>-</button>
                <button onClick={() => {setNumero(numero + passo)}}>+</button>
            </div>

        </div>
    )
}

export default UseStateContador