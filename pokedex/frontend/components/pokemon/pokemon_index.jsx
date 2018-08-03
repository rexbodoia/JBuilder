import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(pokeman => <PokemonIndexItem key={pokeman.id} pokemon={pokeman}/>);

    return (
      <ul className="pokemon-list">{pokemonItems}</ul>
    );
  }
}

export default PokemonIndex;
