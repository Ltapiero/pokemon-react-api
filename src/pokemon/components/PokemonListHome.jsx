import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../helpers";
import { PokeCard } from "./PokeCard";

export const PokemonListHome = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await getPokemonList();
      console.log(pokemons);
      setPokemons(pokemons);
    };

    getPokemons();
  }, []);

  return (
    <>
      <div className="container_pokemons">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </>
  );
};
