export const getPokemonById = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  /* const dataPokemon = await data.pokemon; */

  /*     const promesas = dataPokemon.map(({ pokemon }) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    );
  
    const promesaResuelta = await Promise.all(promesas);
  
    const pokemones = promesaResuelta.map((pokemon) => pokemon.json());
  
    const pokemonsArray = await Promise.all(pokemones);
  
    const pokemonsFilter = pokemonsArray.filter(
      (pokemon) => pokemon.sprites.other.home.front_default != null
    ); */

  return data;
};
