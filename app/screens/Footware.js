import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const Footware = ({navigation})=> {
  return (
    <><View style={styles.background}>
          <Text style={styles.text}>Find Your Life Style!</Text>
          <View style={styles.logingButton}>
              <Text style={styles.text1}>New Arrivals</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen1')}>
            <View style={styles.logingButton1}>

              <Text style={styles.text7}>RUN SUPPORT MENS RUNNING SHOES</Text>
              <Text style={styles.text8}>Rs 8950.00</Text>
              <Image
                  style={styles.image1}
                  source={require('../assets/Images/shoe1.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen2')}>
            <View style={styles.logingButton2}>

              <Text style={styles.text7}>MENS JOGGING SHOES RUN SUPPORT</Text>
              <Text style={styles.text8}>Rs.9950.00</Text>
              <Image
                  style={styles.image2}
                  source={require('../assets/Images/shoe3.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen1')}>
            <View style={styles.logingButton3}>
              <Text style={styles.text7}>RUN SUPPORT MENS RUNNING SHOES RED</Text>
              <Text style={styles.text8}>Rs.5750.00</Text>
              <Image
                  style={styles.image3}
                  source={require('../assets/Images/shoe2.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen1')}>
            <View style={styles.logingButton4}>
              <Text style={styles.text7}>MAN BADMINTON SHOES BS 100 BLUE</Text>
              <Text style={styles.text8}>Rs.3950.00</Text>
              <Image
                  style={styles.image4}
                  source={require('../assets/Images/shoe4.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen1')}>
            <View style={styles.logingButton5}>
              <Text style={styles.text7}>Protect 100 Beginner High-Rise Basketball Shoes</Text>
              <Text style={styles.text8}>Rs.6250.00</Text>
              <Image
                  style={styles.image5}
                  source={require('../assets/Images/shoe5.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('shoeScreen1')}>
            <View style={styles.logingButton6}>
              <Text style={styles.text7}>RUN 100 MENS RUNNING SHOES</Text>
              <Text style={styles.text8}>Rs.5400.00</Text>
              <Image
                  style={styles.image6}
                  source={require('../assets/Images/shoe6.png')} />
            </View>
          </TouchableOpacity>

          </View></>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E391A9',
  },
  text: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 20,
  },
  logingButton: {
    width: 435,
    height: 720,
    backgroundColor: '#CB3461',
    top: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: 350,
    height: 200,
    bottom: 90,
  },
  image1: {
    width: 110,
    height: 90,
    bottom: 1,
    left: 38,
  },
  image2: {
    width: 90,
    height: 110,
    top: 1,
    left: 40,
  },
  image3: {
    width: 90,
    height: 110,
    bottom: 1,
    left: 45,
  },
  image4: {
    width: 110,
    height: 120,
    bottom: 10,
    left: 35,
  },
  image5: {
    width: 110,
    height: 110,
    bottom: 8,
    left: 30,
  },
  image6: {
    width: 110,
    height: 110,
    bottom: 2,
    left: 35,
  },
  text1: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 20,
    left: 78,
  },
  text2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    bottom: 3,
    right: 28,
  },
  text3: {
    color: '#000',
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 5,
    right: 30,
  },
  text4: {
    color: '#8B8282',
    fontSize: 15,
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    bottom: 50,
    right: 40,
  },
  text5: {
    color: '#8B8282',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    bottom: 40,
    left: 20,
  },
  text6: {
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    bottom: 40,
    left: 20,
  },
  logingButton1: {
    width: 170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 570,
    borderRadius: 20,
    left: 20,
  },
  logingButton2: {
    width: 170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 545,
    borderRadius: 20,
    left: 20,
  },
  logingButton3: {
    width: 170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 520,
    borderRadius: 15,
    left: 20,
  },
  logingButton4: {
    width:170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 1050,
    borderRadius: 20,
    left: 240,
  },
  logingButton5: {
    width: 170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 1025,
    borderRadius: 20,
    left: 240,
  },
  logingButton6: {
    width: 170,
    height: 160,
    backgroundColor: '#fff',
    bottom: 996,
    borderRadius: 20,
    left: 240,
  },
  text7: {
    color: '#000',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
  text8: {
    color: '#8B8282',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
});

export default Footware;
