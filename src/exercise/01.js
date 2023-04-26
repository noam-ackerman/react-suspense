// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView, fetchPokemon, PokemonErrorBoundary, PokemonInfoFallback} from '../pokemon'
import {createResource} from '../utils'


let pokemomName = "pikachu";
let pokemonResource = createResource(fetchPokemon(pokemomName))


function PokemonInfo() {
  const pokemon = pokemonResource.read()
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
      <PokemonErrorBoundary>
        <React.Suspense fallback={<PokemonInfoFallback name={pokemomName}/>}>
            <PokemonInfo />
        </React.Suspense>
      </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
