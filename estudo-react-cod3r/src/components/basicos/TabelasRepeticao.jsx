
import listaProdutos from "../../data/listaProdutos"

function TabelasRepeticao() {

    const lista = listaProdutos.map((produto) => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <table border={1} style={{ margin: 'auto' }}>
            <thead>
                <th><strong>ID</strong></th>
                <th><strong>Produto</strong></th>
                <th><strong>Preço</strong></th>
            </thead>

            <tbody>
                {lista}
            </tbody>
        </table>
    )
}

export default TabelasRepeticao