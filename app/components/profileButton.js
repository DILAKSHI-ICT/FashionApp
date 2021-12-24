import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
    TouchableOpacity,
    Text,
} from 'react-native';



export default function ProfileButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.button_text}>{text}</Text>
            </View>
        </TouchableOpacity>
      
    );
  }
  
  const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333',
        width: 40,
        height: 40,
        margin:2,
        borderRadius: 15,
        left: 6,
        bottom: 640,
        alignItems: 'center',
        
    },

    button_text: {
        fontSize: 6,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        top: 2,
    }

    
});


  