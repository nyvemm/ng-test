import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PrivateRoutes;
