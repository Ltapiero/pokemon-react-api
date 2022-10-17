import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { PokemonRoutes } from "../pokemon";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<PokemonRoutes />} />
      </Routes>
    </>
  );
};
