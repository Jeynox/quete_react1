import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import './App.css';

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

function App() {
  const pokemon = pokemonList[2];
  return (
    <div>
      <MyTitle/>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;

