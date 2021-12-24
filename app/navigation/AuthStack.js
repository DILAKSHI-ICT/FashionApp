import React, {useState, useEffect} from 'react';
import {View} from 'react-native;';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect (() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });

        GoogleSignin.configure({
            webClientId: '446051096272-gu4rf3tdpaubq7kmu2r4i9h9ch4f474c.apps.googleusercontent.com',
          });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName = {routeName}>
            <Stack.Screen 
                name = "Onboarding"
                component = {OnboardingScreen}
                options = {{header: () => null}}
            />

            <Stack.Screen
                name = "Login"
                component = {LoginScreen}
                options = {{header: () => null}}
            />

            <Stack.Screen name = "Signup" component = {SignupScreen} />
        </Stack.Navigator>    
    );
};

export default AuthStack;