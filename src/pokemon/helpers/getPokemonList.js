export const getPokemonList = async (loadMore) => {
  let API = `https://pokeapi.co/api/v2/pokemon?limit=30`;
  const res = await fetch(API);
  const data = await res.json();

  /* API = data.next; */

  const dataPokemon = await data.results;

  const promesas = dataPokemon.map((pokemon) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  );

  const promesaResuelta = await Promise.all(promesas);

  const pokemones = promesaResuelta.map((pokemon) => pokemon.json());

  const pokemonsArray = await Promise.all(pokemones);

  const pokemonsFilter = pokemonsArray.filter(
    (pokemon) => pokemon.sprites.other.home.front_default != null
  );
  return pokemonsFilter;
};
