export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/pokemon'
  })
);
