import React from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Link, useNavigate } from "react-router";
import "./header.scss";

function Header() {
  const auth = useAuth();
  const user = auth ? auth.user : null;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>Bienvenue {user ? user.username : "Invité"}</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <button onClick={auth.logout} className="btn btn-primary">Déconnexion</button>
        ) : (
          <Link to="/loginout-page" className="header__nav-link">Connexion</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;