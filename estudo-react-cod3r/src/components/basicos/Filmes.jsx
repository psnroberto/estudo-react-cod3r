
import React from 'react'

function Filmes(props) {
    return (
        <>
            {props.children.map((child) => { return React.cloneElement(child, props) })}
        </>
    )
}

export default Filmes

// Podemos, em React, passar as propriedades de um componente pai para um componente filho através da combinação dos métodos ".map()" e "cloneElement()", este último exclusivo do React;

// Primeiramente, devemos importar a biblioteca React no topo do nosso componente;

// Depois utilizamos o método ".map()" para percorrer todo o array de componentes filhos e executar uma arrow function em cada um deles;

// Ao utilizar o método React "cloneElement()" juntamente com o ".map()", cada children do array será clonado e receberá as props do elemento pai, e então será retornado um novo array de mesmo tamanho, com os novos itens clonados;