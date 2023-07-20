import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import Filmes from './components/basicos/Filmes'
import FilmesInfos from './components/basicos/FilmesInfos'
import ListasRepeticao from './components/basicos/ListasRepeticao'
import TabelasRepeticao from './components/basicos/TabelasRepeticao'

import './App.css'


function App() {
    return (
        <div id="app">

            <div className='Cards'>

                <Card titulo='#07 - Tabelas e repetição' bgcolor='#FF81D0' bordercolor='#FF81D0'>
                    <TabelasRepeticao></TabelasRepeticao>
                </Card>

                <Card titulo='#06 - Listas e repetição' bgcolor='#F0941F' bordercolor='#F0941F'>
                    <ListasRepeticao></ListasRepeticao>
                </Card>

                <Card titulo='#05 - Componentes com Filhos parte 02' bgcolor='#90A19D' bordercolor='#90A19D'>
                    <Filmes>
                        <FilmesInfos></FilmesInfos>
                        <FilmesInfos></FilmesInfos>
                        <FilmesInfos></FilmesInfos>
                    </Filmes>
                </Card>

                <Card titulo='#04 - Componentes com Filhos' bgcolor='#44803F' bordercolor='#44803F'>
                    <Familia sobrenome='SilvaSauro'></Familia>
                </Card>

                <Card titulo='#03 - Desafio Aleatório' bgcolor='#FF5A33' bordercolor='#FF5A33'>
                    <Aleatorio min={1} max={100} /> {/*Ao utilizar "props.children" no componente "Card" conseguimos renderizar outros componentes da aplicação dentro do mesmo.*/}
                </Card>

                <Card titulo='#02 - Com Parâmetro' bgcolor='#FFEC5C' bordercolor='#FFEC5C'>
                    <ComParametro titulo='Situação do aluno' aluno='Pedro' nota={6.8} />
                    <ComParametro aluno='Aurora' nota={9.2} />
                </Card>

                <Card titulo='#01 - Primeiro Componente' bgcolor='#B4CF66' bordercolor='#B4CF66'>
                    <Primeiro />
                </Card>

            </div>

        </div>
    )
}

export default App

// O componente "App" receberá todos os outros componentes da nossa aplicação. No final, ele será renderizado em "index.jsx".