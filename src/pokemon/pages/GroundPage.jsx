import { PokemonList } from "../components";

export const GroundPage = () => {
  return (
    <>
      <h1 className="titlePage">Ground 🏔</h1>
      <PokemonList typePokemon="ground" />
    </>
  );
};
