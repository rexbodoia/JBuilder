import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.pokemon = props.pokemon;
    this.path = "/api/pokemon/".concat(this.pokemon.id);
  }

  render() {
    return (
      <li key={this.pokemon.id}>
        <span>{this.pokemon.id}</span>
        <img src={this.pokemon.image_url}  width='20px' height='20px'/>
        <Link to={this.path}>{this.pokemon.name}</Link>
      </li>
    );
  }

}

export default PokemonIndexItem;
