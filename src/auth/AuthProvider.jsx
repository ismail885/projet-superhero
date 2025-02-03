import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      const newUser = { username };
      setUser(newUser);
      Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
    } else {
      alert("Identifiants incorrects");
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Authentification impossible");
  }
  return context;
}