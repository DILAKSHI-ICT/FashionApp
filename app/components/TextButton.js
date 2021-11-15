import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
    TouchableOpacity,
    Text
} from 'react-native';



export default function TextButton({text, onPress}) {
    return (
      <><TouchableOpacity onPress={onPress}>
        <View style={styles.button1}>
          <Text style={styles.button_text}>Let's Go</Text>
        </View>

      </TouchableOpacity><TouchableOpacity onPress={onPress}>
          <View style={styles.button2}>
            <Text style={styles.button_text}>Back</Text>
          </View>

        </TouchableOpacity></>

      
    );
  }
  
  const styles = StyleSheet.create({
    button1: {
      marginTop: 40,
      marginLeft: 220,
      borderRadius: 15,
      backgroundColor: '#D3E0E9',
      width: 150,
      height: 50,
    },

    button2: {
      marginTop: -50,
      marginLeft: -185,
      borderRadius: 15,
      backgroundColor: '#D3E0E9',
      width: 150,
      height: 50,
    },
    
    button_text: {
      color: 'black',
      fontSize: 25,
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 5,
    },
  });
  