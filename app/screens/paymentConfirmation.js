import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const PaymentConfirmation = ({navigation})=> {
 
  
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Payment Confirmation Details</Text>
      <View style={styles.logingButton} />
      <Image
        style={styles.image}
        source={require('../assets/Images/done.png')}
      />
      <Text style={styles.text1}>Payment Successful ! </Text>
     
      <Text style={styles.text2}>Your order will receive </Text>
      <Text style={styles.text2}>within 3 - 4 days.</Text>

      <Text style={styles.text3}>Contact : 0771245212</Text>
      
      
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={styles.logingButton5}>
          <Text style={styles.text7}>OK</Text>
        </View>
      </TouchableOpacity> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#85787e',
  },

  text: {
    color: '#333',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 60,
  },
  logingButton: {
    width: 400,
    height: 400,
    backgroundColor: '#fff',
    top: 180,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    left: 15
  },
  image: {
    width: 50,
    height: 50,
    bottom: 120,
    left: 188,
  },
  text1: {
    color: '#bf1140',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Poppins',
    bottom: 220,
    left: 15,
    fontWeight: 'bold',
  
  },
  text2: {
    color: '#333',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Poppins',
    bottom: 130,
    fontWeight: 'bold',
    left: 10,
  },
  
  text3: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    bottom:110,
    left: 2,
    fontWeight: 'bold',
  },
 
  logingButton5: {
    width: 130,
    height: 60,
    backgroundColor: '#8a246b',
    bottom: 80,
    borderRadius: 10,
    left: 150,
    borderWidth: 1,
  },
  text7: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 15,
  },
  text10: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 15,
    left: 15,
    padding: 2,
  },
  text11: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 15,
    left: 15,
    padding: 2,
  },
});

export default PaymentConfirmation;