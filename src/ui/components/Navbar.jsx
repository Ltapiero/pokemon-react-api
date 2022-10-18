import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { SearchPage } from "../../pokemon/pages/SearchPage";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`/search/?q=${searchText}`);
    <SearchPage />;
    location.reload();
  };

  const onLogout = () => {
    navigate("/login", { replace: true });
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fs-5 container">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className=" navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/fire"
            >
              Fire
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/water"
            >
              Water
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/poison"
            >
              Poison
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/ice"
            >
              Ice
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/electric"
            >
              Electric
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/ground"
            >
              Ground
            </NavLink>
          </div>
          <form className="d-flex" onSubmit={onSearchSubmit}>
            <input
              className="form-control bg-transparent me-2 border border-white border-2 border-opacity-50 rounded-0 border-top-0 border-end-0 border-start-0"
              type="search"
              placeholder="Search"
              name="searchText"
              aria-label="Search"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-success border-0" type="submit">
              🔎
            </button>
            <span className="username">{user?.name}</span>
            <button
              type="button"
              className="ms-3 btn btn-principal text-white px-4"
              onClick={onLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
