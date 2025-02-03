import "./home.scss";
import Search from "../components/Search/Search";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
    const auth = useAuth();
    const user = auth ? auth.user : null;

    return (
        <div className="home-page">
            <div className="home-container">
                <div className="hero-content text-center text-white mb-4">
                    <h1>Bienvenue sur notre site de super héros</h1>
                    <p>Rerouvez et découvrez des informations sur vos super héros préférés.</p>
                </div>
                {user && <Search />}
            </div>
        </div>
    );
}