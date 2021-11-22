import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style = {styles.container}>
            <Image
                source = {require('../assets/logo.png')}
                style = {styles.logo}
            />
            <Text style = {styles.text}>CHANU FASHIONS</Text>

            <FormInput
                lableValue = {email}
                onChangeText = {(userEmail) => setEmail(userEmail)}
                placeholderText = "Email"
                iconType = "user"
                keyboardType = "email-address"
                autoCapitallize = "none"
                autoCorrect = {false}
            />    

            <FormInput
                lableValue = {password}
                onChangeText = {(userPassword) => setPassword(userPassword)}
                placeholderText = "Password"
                iconType = "lock"
                secureTextEntry = {true}
            />  

            <FormButton
                buttonTitle = "Sign In"
                onPress = {() => alert('Sign In Clicked!')}
            />

            <TouchableOpacity style = {styles.forgotButton} onPress = {() => navigation.navigate('Signup')}>
                <Text style = {styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle = "Sign In with Facebook"
                btnType = "facebook"
                color = "#4867aa"
                backgroundColor = "#e6eaf4" 
                onPress = {() => {}}
            />

            <SocialButton
                buttonTitle = "Sign In with Google"
                btnType = "google"
                color = "#de4d41"
                backgroundColor = "#f5e7ea" 
                onPress = {() => {}}
            />

            <TouchableOpacity style = {styles.forgotButton} onPress = {() => navigation.navigate('Signup')}>
                <Text style = {styles.navButtonText}>Don't have an acount? Create here</Text>
            </TouchableOpacity>


        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },

    text: {
        fontFamily: 'kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },

    navButton: {
        marginTop: 15,
    },

    forgotButton: {
        marginVertical: 35,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});