import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import {
  ElectricPage,
  FirePage,
  GroundPage,
  HomePage,
  IcePage,
  PoisonPage,
  PokemonPage,
  SearchPage,
  WaterPage,
} from "../pages";

export const PokemonRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container_page">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="electric" element={<ElectricPage />} />
          <Route path="fire" element={<FirePage />} />
          <Route path="ground" element={<GroundPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="ice" element={<IcePage />} />
          <Route path="poison" element={<PoisonPage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="water" element={<WaterPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
};
