import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Home from '../pages/Home';

export default function RouteConfig() {
    return(
        <Routes>
            <Route element={<Login />} path='/' />
            <Route element={<PrivateRoute><Home /></PrivateRoute>} path='/home' />
            <Route element={<div>ROTA NÃO DISPONÍVEL</div>} path='*' />
        </Routes>
    )
}