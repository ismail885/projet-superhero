import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import LoginOutPage from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Contact from '../pages/ContactPage';
import PrivateRoute from '../auth/PrivateRoute';
import SuperHeroDetails from '../components/SuperHeroDetails/SuperHeroDetails';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/loginout-page' element={<LoginOutPage />} />
            <Route path='/contact' element={
                <PrivateRoute>
                    <Contact />
                </PrivateRoute>
            } />
            <Route path='/hero/:id' element={
                <PrivateRoute>
                    <SuperHeroDetails />
                </PrivateRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}