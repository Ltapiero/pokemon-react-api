import { Link } from "react-router-dom";

export const PokeCard = (pokemon) => {
  return (
    <div className="col card-pokemon">
      <div className="row pokeImg">
        <small className="pokeId">{pokemon.id}</small>
        <Link to={`/pokemon/${pokemon.name}`}>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        </Link>
      </div>

      <div>
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>

          <div className="card-types">
            {pokemon.types.map((type, i) => (
              <small
                key={i}
                className={"btnTipoPokemon" + " " + `${type.type.name}`}
              >
                {type.type.name}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
