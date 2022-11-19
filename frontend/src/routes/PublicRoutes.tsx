import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/signup" element={<RegisterScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PublicRoutes;
