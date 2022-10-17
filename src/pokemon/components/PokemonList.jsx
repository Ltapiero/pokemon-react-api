import { useEffect, useState } from "react";
import { getPokemonsByType } from "../helpers";
import { PokeCard } from "./PokeCard";

export const PokemonList = ({ typePokemon }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await getPokemonsByType(typePokemon);
      setPokemons(pokemons);
    };
    getPokemons();
  }, []);

  return (
    <>
      <div className="container_pokemons animate__animated animate__fadeIn animate__delay-2s">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </>
  );
};
