export const getAllPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1154`);
  const data = await res.json();
  return data;
};
