import { useNavigate } from "react-router-dom";

export const PokemonDescription = (pokemon) => {
  const navigate = useNavigate();

  const onNavigationBack = () => {
    navigate(-1);
  };

  return (
    <div className="container_pokemons pokemonDescription">
      <div className="pokemonDescription-left  animate__animated animate__fadeIn animate__delay-1s">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-left-circle arrowBack"
          viewBox="0 0 16 16"
          onClick={onNavigationBack}
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
        <div className="pokemonDescription-left_img">
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        </div>

        <small className="pokemonDescription-number">#00{pokemon.id}</small>

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

        <h5 className="card-title pokemonDescription-name">{pokemon.name}</h5>
      </div>
      <div className="pokemonDescription-right">
        <div className="pokemonDescription-table animate__animated animate__fadeInRight animate__delay-1s">
          <h4 className="pokemonDescription-table_title">Pokedex data</h4>
          <table className="table table-borderless">
            <tbody className="">
              <tr>
                <th>Height</th>
                <td>{(pokemon.height * 0.1).toFixed(1)}m</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{(pokemon.weight * 0.1).toFixed(1)}Kg</td>
              </tr>
              <tr>
                <th>Abilities</th>
                <td>
                  {pokemon.abilities.map(({ ability }) => " " + ability.name)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pokemonDescription-stats animate__animated animate__fadeInRight animate__delay-1s">
          <h4 className="pokemonDescription-table_title">Base stats</h4>
          <table className="table table-borderless">
            <tbody className="">
              {pokemon.stats.map((stat, i) => (
                <tr key={i}>
                  <th>
                    {stat.stat.name.slice(0, 3)}:{" " + stat.base_stat}
                  </th>
                  <td className="pokemonDescription-stats_barProgress">
                    {" "}
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{ width: stat.base_stat / 2 + "%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
