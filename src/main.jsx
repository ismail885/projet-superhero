import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import Header from './layouts/Header/Header';
import App from './App.jsx';
import { AuthProvider } from './auth/AuthProvider';
import Footer from './layouts/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <App />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);