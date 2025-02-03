import Router from "./routes/Router";
import "./App.css";
import { AuthProvider } from "./auth/AuthProvider";

export default function App() {
  return (
    <>
      <AuthProvider>
          <Router />
      </AuthProvider>
    </>
  );
}