import { useAuth } from "../auth/AuthProvider";
import { Login, Logout } from "../auth/LoginOut";
import "./login.scss";

export default function LoginOutPage() {
    const auth = useAuth();
    const user = auth ? auth.user : null;

    return (
        <div className="login">
            {user ? (
                <div className="logout">
                    <Logout />
                </div>
            ) : (
                <div className="login">
                    <Login />
                </div>
            )}
        </div>
    );
}