import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import { UserProfile } from '../pages/UserProfile';

export default function RouteConfig() {
    return(
        <Routes>
            <Route element={<Login />} path='/' />
            <Route element={<Register />} path='/register' />
            <Route element={<PrivateRoute><Home /></PrivateRoute>} path='/home' />
            <Route element={<PrivateRoute><UserProfile /></PrivateRoute>} path='/user/profile' />
            <Route element={<PrivateRoute><div>ROTA NÃO DISPONÍVEL</div></PrivateRoute>} path='*' />
        </Routes>
    )
}