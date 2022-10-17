import { useEffect, useState } from "react";
import { getAllPokemon } from "./getAllPokemon";

export const getPokemonByName = (name = "") => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await getAllPokemon();

      if (pokemons) {
        const pokemonesFiltrados = pokemons.results.filter((pokemon) =>
          pokemon.name.toLocaleLowerCase().includes(name)
        );

        const consultarPokemones = async () => {
          const pokemones = pokemonesFiltrados.map((pokemon) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          );

          const promesaResuelta = await Promise.all(pokemones);

          const pokemonesSolved = promesaResuelta.map((pokemon) =>
            pokemon.json()
          );

          const pokemons = await Promise.all(pokemonesSolved);

          const pokemonsFilter = pokemons.filter(
            (pokemon) => pokemon.sprites.other.home.front_default != null
          );

          return setPokemons(pokemonsFilter);
        };

        consultarPokemones();
      } else {
        setPokemons([]);
      }
    };
    getPokemons();
  }, []);

  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return pokemons;
};
