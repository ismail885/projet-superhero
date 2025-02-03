import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-page">
      <section className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>Redirecting to the homepage in 3 seconds...</p>
        <Link to="/">
          <button className="btn btn-primary">Retour à l'accueil</button>
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;