
function FilmesInfos(props) {
    return (
        <p>
            <strong>Filme:</strong> {props.filme} /
            <strong>Ano:</strong> {props.ano} /
            <strong>Gênero:</strong> {props.genero} /
            <strong>Oscar?</strong> {props.oscar}
        </p>
    )
}

export default FilmesInfos