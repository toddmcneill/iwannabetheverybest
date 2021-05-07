import React from 'react';

export default function PokemonList ({ pokemons }) {
  return (
    <ul>
      {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
    </ul>
  );
}