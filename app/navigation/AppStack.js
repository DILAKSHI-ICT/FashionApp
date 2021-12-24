import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Footware from '../screens/Footware';
import Watches from '../screens/watches';
import SignUpScreen from '../screens/SignUpScreen';
import MenItems from '../screens/MenItems';
import WomenItems from '../screens/WomenItems';
import KidsItems from '../screens/KidsItems';
import CategoryScreen1 from '../screens/girl1';
import CategoryScreen3 from '../screens/girl3';
import CategoryScreen2 from '../screens/girl2';
import CategoryScreen4 from '../screens/boy1';
import CategoryScreen5 from '../screens/boy2';
import CategoryScreen6 from '../screens/boy3';
import CategoryScreen7 from '../screens/kids1';
import CategoryScreen8 from '../screens/kids2';
import shoeScreen1 from '../screens/shoes1';
import shoeScreen2 from '../screens/shoes2';
import WatchDetails1 from '../screens/watch1';
import WatchDetails2 from '../screens/watch2';
import PaymentProces from '../screens/payment';
import Payment from '../screens/paymentDetails';
import PaymentProcces from '../screens/payment';
import PaymentDetails from '../screens/paymentDetails';
import PaymentConfirmation from '../screens/paymentConfirmation';
import ViewProfile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Dots from 'react-native-onboarding-swiper/src/Dots';


const Stack = createStackNavigator();

const AppStack1 =() => {
    return (
        
        <Stack.Navigator >
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
            <Stack.Screen name = 'Dots' component = {Dots} />
            <Stack.Screen name = 'SignUpScreen' component = {SignUpScreen} />
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen} />

            <Stack.Screen name = 'Shoes' component = {Footware} />
            <Stack.Screen name = 'MenItems' component = {MenItems} />
            <Stack.Screen name = 'WomenItems' component = {WomenItems} />
            <Stack.Screen name = 'KidsItems' component = {KidsItems} />
            <Stack.Screen name = 'Footware' component = {Footware} />
            <Stack.Screen name = 'watches' component = {Watches} />

            <Stack.Screen name = 'CategoryScreen1' component = {CategoryScreen1} />
            <Stack.Screen name = 'CategoryScreen2' component = {CategoryScreen2} />
            <Stack.Screen name = 'CategoryScreen3' component = {CategoryScreen3} />
            <Stack.Screen name = 'CategoryScreen4' component = {CategoryScreen4} />
            <Stack.Screen name = 'CategoryScreen5' component = {CategoryScreen5} />
            <Stack.Screen name = 'CategoryScreen6' component = {CategoryScreen6} />
            <Stack.Screen name = 'CategoryScreen7' component = {CategoryScreen7} />
            <Stack.Screen name = 'CategoryScreen8' component = {CategoryScreen8} />
            <Stack.Screen name = 'shoeScreen1' component = {shoeScreen1} />
            <Stack.Screen name = 'shoeScreen2' component = {shoeScreen2} />
            <Stack.Screen name = 'WatchDetails1' component = {WatchDetails1} />
            <Stack.Screen name = 'WatchDetails2' component = {WatchDetails2} />

            <Stack.Screen name = 'paymentDetails' component = {PaymentDetails} />
            <Stack.Screen name = 'payment' component = {PaymentProcces} />
            <Stack.Screen name = 'paymentConfirmation' component = {PaymentConfirmation} />

            <Stack.Screen name = 'Profile' component = {ViewProfile} />
            <Stack.Screen name = 'EditProfile' component = {EditProfile} />

           

        </Stack.Navigator>
        
    );


}

export default AppStack1;



