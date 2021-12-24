import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const PaymentDetails = ({navigation})=> {
  
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Payment Details</Text>
      <View style={styles.logingButton} />
      
      <Text style={styles.text1}>Name</Text>
      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="Dilakshi Abeysinghe" />
      </View>
      <Text style={styles.text2}>Address</Text>
      <View style={styles.logingButton2}>
        <TextInput style={styles.text11} placeholder="No. 253, Panadura" />
      </View>
      <Text style={styles.text3}>Contact No.</Text>
      <View style={styles.logingButton3}>
        <TextInput style={styles.text4} placeholder="0772456235" />
      </View>
      <Text style={styles.text5}>Province</Text>
      <View style={styles.logingButton4}>
        <TextInput style={styles.text6} placeholder="Western" />
      </View>
      <Text style={styles.text5}>City</Text>
      <View style={styles.logingButton7}>
        <TextInput style={styles.text8} placeholder="Panadura" />
      </View>
      <Text style={styles.text12}>ZIP Code</Text>
      <View style={styles.logingButton6}>
        <TextInput style={styles.text9} placeholder="12500" />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('payment')}>
        <View style={styles.logingButton5}>
          <Text style={styles.text7}>Pay Now</Text>
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
  
  text1: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 600,
    left: 15,
    fontWeight: 'bold',
  },
  logingButton1: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
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
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
    borderWidth: 1,
  },
  text3: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 600,
    left: 15,
    fontWeight: 'bold',
    
  },
  logingButton3: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
    borderWidth: 1,
  },
  text4: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 18,
    padding: 2,
    left: 15,
  },
  text5: {
    color: '#8a246b',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    bottom: 605,
    left: 15,
    fontWeight: 'bold',
   
  },
  logingButton4: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
    borderWidth: 1,
  },
  text6: {
    color: '#403F3F',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 18,
    padding: 2,
    left: 15,
  },
  logingButton5: {
    width: 130,
    height: 60,
    backgroundColor: '#8a246b',
    bottom: 600,
    borderRadius: 10,
    left: 150,
    borderWidth: 1,
  },
  logingButton6: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
    borderWidth: 1,
  },
  logingButton7: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 640,
    borderRadius: 10,
    left: 115,
    borderWidth: 1,
  },
  text7: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    top: 15,
    left: 5,
    fontWeight: 'bold',
  },
  text8: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 10,
    left: 15,
  },
  text9: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 10,
    left: 15,
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
  text12: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 10,
    left: 15,
  },
});

export default PaymentDetails;