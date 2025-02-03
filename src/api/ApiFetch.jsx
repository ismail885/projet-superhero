import { useState, useEffect } from "react";
import "./loader.scss";

export default function ApiFetch({ children }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const response = await fetch(`https://superheroapi.com/api`);
                // https://corsproxy.io/https://superheroapi.com/api/40eb36477d5a5cb3609798821f02ce39/
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 5000);
            }
        };

        fetchAPOD();
    }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <>{data && children(data)}</>;
}