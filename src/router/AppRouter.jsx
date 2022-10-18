import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { PokemonRoutes } from "../pokemon";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <PokemonRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
