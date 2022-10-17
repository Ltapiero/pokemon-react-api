import { getPokemonByName } from "../helpers/getPokemonByName";
import { PokeCard } from "../components";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import charizard from "../../assets/charizard.svg";

export const SearchPage = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const pokemones = getPokemonByName(q);

  const showError = q.length > 0 && pokemones.length === 0;

  useEffect(() => {
    console.log(q);
  }, []);

  console.log(pokemones);
  return (
    <>
      <h1 className="titlePage">SearchPage 🔍{console.log("activo")}</h1>

      <div
        style={{ display: showError ? "" : "none" }}
        className="noFound animate__animated animate__fadeIn animate__delay-3s"
      >
        <h2>No encontrado 😥</h2>
        <img src={charizard} alt="" />
      </div>
      <div className="container_pokemons animate__animated animate__fadeIn animate__delay-2s">
        {pokemones.map((pokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </>
  );
};
