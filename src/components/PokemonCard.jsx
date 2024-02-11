function PokemonCard(props) {
    console.log(props)

    return <figure className="carte-pokemon">
                {props.pokemon.imgSrc === undefined ? <p>No image</p> : <img className="image-pokemon" src={props.pokemon.imgSrc} alt={props.pokemon.name} />}
                <figcaption className='nom-pokemon'>{props.pokemon.name}</figcaption>
            </figure>
}

export default PokemonCard;