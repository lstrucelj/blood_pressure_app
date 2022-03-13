import React from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const isLoggedIn = localStorage.getItem('TOKEN');

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute