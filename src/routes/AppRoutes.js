import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import User from '../components/User/User'
import PrivateRoutes from './PrivateRoutes';
import Loading from '../components/Loading/Loading';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<PrivateRoutes />}>
                    <Route path='/users' element={<User />} />
                    <Route path="/projects" Component={() => <div>project</div>} />
                    <Route path="/" Component={() => <div><Loading /></div>} />
                </Route>
                <Route path="*" Component={() => <div>undefine</div>} />

            </Routes>
        </>
    )
}
