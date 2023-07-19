import reactDOM from 'react-dom'

import React from 'react' // Para utilizarmos a sintaxe JSX, que é a forma utilizada pelo React de trabalhar uma espécie de HTML misturado com JS, devemos importar a bibliotec "React". Dessa forma, podemos trabalhar sintaxe HTML dentro de sintaxes JS, como por exemplo retornar uma div dentro de uma função JS. O react irá, por debaixo dos panos, converter todas essas linhas de código JSX em JavaScript puro, para que possa ser interpredadas pelo navegador;

import './index.css' // Podemos importar para dentro de nossos componentes React outros arquivos ou componentes. Estamos importando aqui o arquivo "index.css", que será responsável por fazer as estilizações gerais da nossa aplicação;

import App from './App'

reactDOM.render(
    <div>
        <h1>Hello, world! Fundamentos de React.</h1>
        <App/>
    </div>,
    document.getElementById('root')
) // Aqui é onde o nosso projeto será renderizado na tela. Devemos colocar como parâmetros o que desejamos que seja renderizado (no nosso exemplo, a frase 'Hello, world!' e a div de id 'root', presente no arquivo index.html)