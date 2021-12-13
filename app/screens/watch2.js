import React from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';

function WatchDetails1({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Book');
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>PRODUCT DETAILS</Text>
      
      <Image
        style={styles.image}
        source={require('../assets/Images/watch2.png')}
      />
      <Text style={styles.text1}>DANIEL KLEIN -DK12197-1</Text>
      <Text style={styles.text2}>New Arrivals</Text>

      <Text style={styles.text4}>Specification :-</Text>

      <Text style={styles.text8}>Band Material: Leather, Band Width: 14 Millimeters, Bezel Material: Stainless Steel, Dial Colour: Blue, Crystal Material: Glass, Display Type: Analog, Case Shape: Round, Item Weight: 125 Grams
</Text>    
      <Text style={styles.text5}>Rs.6950.00</Text>
      <Text style={styles.text6}>Island Wide Delivery Available</Text>
      <Pressable onPress={onPressHandler}>
        <View style={styles.logingButton}>
          <Text style={styles.text11}>Buy Now</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e2e2e1',
  },
  logingButton: {
    width: 140,
    height: 60,
    backgroundColor: '#8a246b',
    top:30,
    borderRadius: 10,
    left: 260,
  },
  logingButton3: {
    width: 60,
    height: 60,
    backgroundColor: '#353535',
    top: 80,
    borderRadius: 15,
    left: 120,
  },
  logingButton4: {
    width: 60,
    height: 60,
    backgroundColor: '#353535',
    bottom: -20,
    borderRadius: 15,
    left: 185,
  },
  logingButton5: {
    width: 60,
    height: 60,
    backgroundColor: '#353535',
    bottom: 40,
    borderRadius: 15,
    left: 250,
  },

  text: {
    color: '#8a246b',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 40,
  },

  image: {
    width: 280,
    height: 330,
    top: 60,
    left: 75,
  },
  text1: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 60,
  },
  text2: {
    color: '#a93049',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 60,
  },
  text3: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins',
    top: 60,
  },
  text4: {
    color: '#8a246b',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 75,
    left: 10,
  },
  
  text5: {
    color: '#333',
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 100,
    left: 40,
  },
  text6: {
    color: '#9C8E8E',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 140,
    left: 85,
  },
  text7: {
    color: '#9B9696',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 10,
  },
  text8: {
    color: '#9B9696',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 75,
  },
  
  text11: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 15,
  },
});

export default WatchDetails1;