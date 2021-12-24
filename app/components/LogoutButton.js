import React from 'react';
import {
    Text,
    TouchableOpasity,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {windowHeight, windowWidth} from '../utils/Dimention';

const LogoutButton = ({buttonTitle, ...rest}) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  };

export default LogoutButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 660,
        width: '100%',
        height: 50,
        backgroundColor: '#5E606C',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});