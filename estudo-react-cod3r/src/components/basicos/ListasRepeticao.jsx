
import listaAlunos from "../../data/listaAlunos"

function ListasRepeticao(){

    const lista = listaAlunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                id: {aluno.id}; 
                nome: {aluno.nome}; 
                nota: {aluno.nota}; 
                status: {aluno.status}
            </li>
        )
    })

    return (
        <ul style={{listStyle: 'none'}}> {/*Estamos definindo "inline" que a lista não terá as "bolinhas" na frente de cada item. Note que "style" é um objeto que contém cada propriedade de estilo.*/}
            {lista}
        </ul>
    )
}

export default ListasRepeticao

// Podemos trabalhar com listas de dados em React. Neste exercício, importamos um array de um arquivo JS, contendo vários objetos, cada um com os atributos dos alunos (id, nome, nota e status);

// Para transformar todos estes dados em uma lista, utilizamos o método ".map()". Este método percorre cada posição do array importado e retorna em seu lugar um "li" (list item), que contém os atributos de cada alino;

// Atribuímos este novo array retornado pelo ".map()" a uma variável chamada "lista", e dentro do retorno do nosso componente "ListasRepeticao", utilizamos esta variável dentro de uma "ul" (unordered list);

// É importante perceber que o React pede sempre para atribuírmos um valor ÚNICO para a propriedade "key" de cada item da lista. Deste modo, atribuímos a cada "key" de items da lista o valor do "id", pois é um valor que não será repetido (futuramente poderemos fazer validações para que estes valores nunca se repitam).