import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const PaymentProcces = ({navigation})=> {
 
  
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Payment Details</Text>
      <View style={styles.logingButton} />
      <Image
        style={styles.image}
        source={require('../assets/Images/ATM.png')}
      />
      <Text style={styles.text1}>Card number</Text>
      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="6588 4512 2467 2355" />
      </View>
      <Text style={styles.text2}>Cardholder name</Text>
      <View style={styles.logingButton2}>
        <TextInput style={styles.text11} placeholder="Dilakshi Abeysinghe" />
      </View>
      <Text style={styles.text3}>Expiration date</Text>
      <View style={styles.logingButton3}>
        <TextInput style={styles.text4} placeholder="02/23" />
      </View>
      <Text style={styles.text5}>VCC</Text>
      <View style={styles.logingButton4}>
        <TextInput style={styles.text6} placeholder="672" />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('paymentConfirmation')}>
        <View style={styles.logingButton5}>
          <Text style={styles.text7}>Pay Here</Text>
        </View>
      </TouchableOpacity> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E391A9',
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
    width: 435,
    height: 720,
    backgroundColor: '#e2e2e1',
    top: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: 300,
    height: 200,
    bottom: 610,
    left: 70,
  },
  text1: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 620,
    left: 15,
    fontWeight: 'bold',
  },
  logingButton1: {
    width: 340,
    height: 60,
    backgroundColor: '#fff',
    bottom: 607,
    borderRadius: 10,
    left: 45,
    borderWidth: 1,
  },
  text2: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 600,
    fontWeight: 'bold',
    left: 15,
  },
  logingButton2: {
    width: 340,
    height: 60,
    backgroundColor: '#fff',
    bottom: 590,
    borderRadius: 10,
    left: 45,
    borderWidth: 1,
  },
  text3: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 579,
    left: 50,
    fontWeight: 'bold',
  },
  logingButton3: {
    width: 130,
    height: 60,
    backgroundColor: '#fff',
    bottom: 569,
    borderRadius: 10,
    left: 50,
    borderWidth: 1,
  },
  text4: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins',
    top: 18,
    padding: 2,
  },
  text5: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'Poppins',
    bottom: 657,
    right: 102,
    fontWeight: 'bold',
  },
  logingButton4: {
    width: 130,
    height: 60,
    backgroundColor: '#fff',
    bottom: 652,
    borderRadius: 10,
    left: 250,
    borderWidth: 1,
  },
  text6: {
    color: '#403F3F',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins',
    top: 18,
    padding: 2,
  },
  logingButton5: {
    width: 130,
    height: 60,
    backgroundColor: '#8a246b',
    bottom: 640,
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

export default PaymentProcces;