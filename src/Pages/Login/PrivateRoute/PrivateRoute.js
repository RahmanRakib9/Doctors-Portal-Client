import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const PrivateRoute = ({ children }) => {
     const { user, isLoading } = useAuth();
     const location = useLocation();

     //display spinner
     if (isLoading) {
          return <CircularProgress />
     }

     if (user.email) {
          return children;
     }
     return <Navigate to='/login' state={{ from: location }} replace />;

};

export default PrivateRoute;