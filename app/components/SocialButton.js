import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {windowHeight, windowWidth} from '../utils/Dimention';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
  }) => {
    let bgColor = backgroundColor;
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: bgColor}]}
        {...rest}>
        <View style={styles.iconWrapper}>
          <FontAwesome
            name={btnType}
            style={styles.icon}
            size={22}
            color={color}
          />
        </View>
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
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