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
        backgroundColor: '#7d3c92',
        width: 80,
        height: 50,
        margin:30,
        borderRadius: 20,
        left: 312,
        marginTop:5,
    },

    
    
  });
  