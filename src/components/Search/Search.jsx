import { useState } from "react";
import { Link } from "react-router-dom";
import "./search.scss";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/40eb36477d5a5cb3609798821f02ce39/search/${query}`);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }
            const data = await response.json();
            if (data.response === "error") {
                setError("Aucun résultat trouvé");
                setResults([]);
            } else {
                setResults(data.results || []);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSearch} className="d-flex mb-4">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Rechercher un super héros..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Rechercher</button>
            </form>
            {isLoading && <div className="loader"></div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="results">
                {results.map((hero) => (
                    <div key={hero.id} className="card mb-2">
                        <Link to={`/hero/${hero.id}`}>
                            <img src={hero.image.url} alt={hero.name} className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}