import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../cards/Card';
import Register from '../register/Register';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/cards' element={<Card />} />
        </Routes>
    )
}

export default Router;
