import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PokemonDescription } from "../components";
import { getPokemonById } from "../helpers";

export const PokemonPage = () => {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const pokemons = await getPokemonById(id);
    return setPokemons(pokemons);
  };

  /*   if (!pokemons) {
    return <Navigate to="/home" />;
  } */

  return pokemons ? <PokemonDescription {...pokemons} /> : null;
};
