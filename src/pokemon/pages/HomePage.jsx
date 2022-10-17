import { PokemonListHome } from "../components";
import charizard from "../../assets/charizard.svg";

export const HomePage = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1 className="header-left_title animate__animated animate__fadeInLeft animate__delay-1s">
            Bienvenido al buscador Pokemon
          </h1>
          <p className="header-left_subtitle animate__animated animate__fadeIn animate__delay-2s">
            Aquí puedes encontrar todos tus pokemones preferidos mediante las
            categorías o por medio del buscador
          </p>
        </div>
        <div className="header-right">
          <div className="header-right-circle animate__animated animate__fadeInTopRight animate__slow animate__delay-1s"></div>
          <img
            className="animate__animated animate__pulse animate__delay-4s"
            src={charizard}
            alt=""
          />
        </div>
      </header>
      <PokemonListHome />
    </>
  );
};
