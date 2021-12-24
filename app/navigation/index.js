import React from 'react';
import Routes from '../navigation/Routes';
import { AuthProvider } from './AuthProvider';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const PrimaryNavigator = createStackNavigator();

const Providers = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
        
       
    );
}

export default Providers;
