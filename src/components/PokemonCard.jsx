function PokemonCard() {
    const pokemon = pokemonList[1]
    return <figure className="carte-pokemon">
                {pokemon.imgSrc === undefined ? <p>No image</p> : <img className="image-pokemon" src={pokemon.imgSrc} alt={pokemon.name} />}
                <figcaption className='nom-pokemon'>{pokemon.name}</figcaption>
            </figure>
}

const pokemonList = [
    {
        name: "balbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        name: "mew",
        
    },
    {
        name: "Salameche",
        imgSrc: "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/800px-Salam%C3%A8che-RFVF.png"
    }
]

export default PokemonCard;