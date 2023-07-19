import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

import './App.css'

function App() {
    return (
        <div id="app">

            <div className='Cards'>
                <Card titulo='Desafio Aleatório'>
                    <Aleatorio min={1} max={100} /> {/*Ao utilizar "props.children" no componente "Card" conseguimos renderizar outros componentes da aplicação dentro do mesmo.*/}
                </Card>

                <Card titulo='Com Parâmetro'>
                    <ComParametro titulo='Situação do aluno' aluno='Pedro' nota={6.8} />
                    <ComParametro aluno='Aurora' nota={9.2} />
                </Card>

                <Card titulo='Primeiro Componente'>
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}

export default App

// O componente "App" receberá todos os outros componentes da nossa aplicação. No final, ele será renderizado em "index.jsx".