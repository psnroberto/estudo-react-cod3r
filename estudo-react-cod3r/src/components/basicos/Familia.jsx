
import FamiliaMembro from "./FamiliaMembro"

function Familia(props) {
    return (
        <>
            <FamiliaMembro nome='Roberto' sobrenome={props.sobrenome} idade={31} altura={1.70} />
            <FamiliaMembro nome='Rúbia' sobrenome={props.sobrenome}  idade={33} altura={1.52} />
            <FamiliaMembro nome='Luiza' sobrenome={props.sobrenome}  idade={34} altura={1.60} />
            <FamiliaMembro nome='Leila' sobrenome={props.sobrenome}  idade={68} altura={1.20} />
            <FamiliaMembro nome='Lico' sobrenome='Florservaldium'  idade={67} altura={1.69}/>
        </>
    )
}

export default Familia

// Podemos, em React, importar componentes dentro de outros componentes, fazendo uma espécie de cascata, e por fim, importá-los em nosso componente principal, "App". Neste exemplo, criamos um componente chamado "FamiliMembro", o qual terá as propriedades de cada membro da família (nome, sobrenome, idade e altura);

// Importamos "FamiliaMembro" para dentro de "Familia", e neste definimos os valores das propriedades;

// A diferença neste exercício é que a propriedade "sobrenome" não foi definida diretamente em "Familia", mas teve seu valor definido dentro da nossa aplicação principal, "App" (exceto para o último membro da família, que teve sua propriedade "sobrenome" definida diretamente);

// A propriedade "sobrenome" de "FamiliaMembro" teve seu valor definido como a propriedade "sobrenome" de "Familia", e esta última teve seu valor definido em nossa aplicação principal, "App";

// Assim, verificamos que podemos passar as propriedades do componente pai ("Familia") para o componente filho ("FamiliaMembro"), de forma explícita.