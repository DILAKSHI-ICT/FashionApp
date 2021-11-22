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

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style = {styles.container}>
        
            <Text style = {styles.text}>Create an account</Text>

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

            <FormInput
                lableValue = {confirmPassword}
                onChangeText = {(userPassword) => setPassword(userPassword)}
                placeholderText = "Confirm Password"
                iconType = "lock"
                secureTextEntry = {true}
            />

            <FormButton
                buttonTitle = "Sign Up"
                onPress = {() => alert('Sign Up Clicked!')}
            />

            <View style = {styles.textPrivate}>
                <Text style = {styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onpress = {() => alert('Terms Clicked!')}>
                    <Text style = {[styles.color_textPrivate, {color: '#e88832'}]}>Terms of service</Text>
                </TouchableOpacity>
                <Text style = {styles.color_textPrivate}>and</Text>
                <Text style = {[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
            </View>

            <SocialButton
                buttonTitle = "Sign Up with Facebook"
                btnType = "facebook"
                color = "#4867aa"
                backgroundColor = "#e6eaf4" 
                onPress = {() => {}}
            />

            <SocialButton
                buttonTitle = "Sign Up with Google"
                btnType = "google"
                color = "#de4d41"
                backgroundColor = "#f5e7ea" 
                onPress = {() => {}}
            />

            <TouchableOpacity style = {styles.navButton} onPress = {() => navigation.navigate('Login')}>
                <Text style = {styles.navButtonText}>Have an acount? Sign In</Text>
            </TouchableOpacity>


        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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


    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});