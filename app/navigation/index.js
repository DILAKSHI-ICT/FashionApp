import React from 'react';
import Routes from '../navigation/Routes';
import { AuthProvider } from './AuthProvider';

const Providers = () => {
    return (
        <AuthProvider>
             <Routes />
        </AuthProvider>
       
    );
}

export default Providers;