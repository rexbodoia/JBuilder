import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};
