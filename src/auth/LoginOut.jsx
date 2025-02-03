import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="custom-container">
      <div className="custom-login-form">
        <h3 className="custom-title">Se connecter</h3>
        <form onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <label className="custom-label">Identifiant:</label>
            <input
              type="text"
              className="custom-input"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="custom-form-group">
            <label className="custom-label">Mot de passe:</label>
            <input
              type="password"
              className="custom-input"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="custom-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

function Logout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="custom-container">
      <div className="custom-logout-form">
        <h3 className="custom-title">Se déconnecter</h3>
        <button onClick={handleLogout} className="custom-button">Se déconnecter</button>
      </div>
    </div>
  );
}

export { Login, Logout };