import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./superhero.scss";

export default function SuperHeroDetails() {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHeroDetails = async () => {
            try {
                const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/40eb36477d5a5cb3609798821f02ce39/${id}`);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data = await response.json();
                setHero(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHeroDetails();
    }, [id]);

    if (isLoading) {
        return <div className="loader"></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="hero-details-container">
            {hero && (
                <div className="card">
                    <img src={hero.image.url} alt={hero.name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">Nom complet: {hero.biography["full-name"]}</p>
                        <p className="card-text">Publisher: {hero.biography.publisher}</p>
                        <p className="card-text">Première apparition: {hero.biography["first-appearance"]}</p>
                        <p className="card-text">Alignement: {hero.biography.alignment}</p>
                        <h6>Statistiques:</h6>
                        <ul>
                            <li>Intelligence: {hero.powerstats.intelligence}</li>
                            <li>Force: {hero.powerstats.strength}</li>
                            <li>Vitesse: {hero.powerstats.speed}</li>
                            <li>Durabilité: {hero.powerstats.durability}</li>
                            <li>Puissance: {hero.powerstats.power}</li>
                            <li>Combat: {hero.powerstats.combat}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}