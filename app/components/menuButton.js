import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
    TouchableOpacity,
    Text,
} from 'react-native';



export default function MenuButton({text, onPress}) {
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
        backgroundColor: '#e2e2e1',
        width: 180,
        height: 40,
        margin:28,
        borderRadius: 15,
        left: 100,
        marginTop:55,
        alignItems: 'center',
        
    },

    button_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    }

    
});


  