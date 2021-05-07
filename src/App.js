import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [leftPokemonData, setLeftPokemonData] = useState([])
  const [rightPokemonData, setRightPokemonData] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const results = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(response => response.results);
      setLeftPokemonData(results.filter((x, i) => {
        return i % 2 === 0
      }))
      setRightPokemonData(results.filter((x, i) => {
        return i % 2 !== 0
      }))
    }
    loadData()
  }, [])

  return (
    <div className="App">
      <div><PokemonList pokemons={leftPokemonData}/></div>
      <div>Center</div>
      <div><PokemonList pokemons={rightPokemonData}/></div>
    </div>
  );
}

export default App;
