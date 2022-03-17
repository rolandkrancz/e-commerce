import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import './App.css';

const Navigation = () => {
    return (
        <div>
            <div>
                <h1>Navigation bar</h1>
            </div>
            <Outlet />
        </div>
    )
}

const Shop = () => {
    return (
        <div>
            <div>
                <h1>Shop</h1>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                {/* index{true} == render if the parent element ('/') is matched. */ } 
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default App;