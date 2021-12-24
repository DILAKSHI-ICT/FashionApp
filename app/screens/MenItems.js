import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const MenItems = ({navigation})=> {

  return (
    <><View style={styles.background}>
          <Text style={styles.text}>Find Your Life Style!</Text>
          <View style={styles.logingButton}>
              <Text style={styles.text1}>New Arrivals</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen4')}>
            <View style={styles.logingButton1}>

              <Text style={styles.text7}>Mandarin Collar T</Text>
              <Text style={styles.text8}>Rs 3950.00</Text>
              <Image
                  style={styles.image1}
                  source={require('../assets/Images/man1.png')} />
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen5')}>
            <View style={styles.logingButton2}>

              <Text style={styles.text7}>Crew Neck T-Shirt</Text>
              <Text style={styles.text8}>Rs.1950.00</Text>
              <Image
                  style={styles.image2}
                  source={require('../assets/Images/man2.png')} />
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen6')}>
            <View style={styles.logingButton3}>
              <Text style={styles.text7}>James Short Sleeve Kurtha</Text>
              <Text style={styles.text8}>Rs.2550.00</Text>
              <Image
                  style={styles.image3}
                  source={require('../assets/Images/man3.png')} />
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen4')}>
          <View style={styles.logingButton4}>
              <Text style={styles.text7}>Crew Neck T-Shirt</Text>
              <Text style={styles.text8}>Rs.1950.00</Text>
              <Image
                  style={styles.image4}
                  source={require('../assets/Images/man4.png')} />
          </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen4')}>
            <View style={styles.logingButton5}>
              <Text style={styles.text7}>Collar Check</Text>
              <Text style={styles.text8}>Rs.2250.00</Text>
              <Image
                  style={styles.image5}
                  source={require('../assets/Images/man5.png')} />
            </View>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen4')}>
          <View style={styles.logingButton6}>
              <Text style={styles.text7}>Matt Detailed Casual</Text>
              <Text style={styles.text8}>Rs.3500.00</Text>
              <Image
                  style={styles.image6}
                  source={require('../assets/Images/man6.png')} />
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
    width: 80,
    height: 110,
    bottom: 1,
    left: 50,
  },
  image2: {
    width: 80,
    height: 100,
    top: 8,
    left: 45,
  },
  image3: {
    width: 80,
    height: 110,
    bottom: 13,
    left: 65,
  },
  image4: {
    width: 80,
    height: 110,
    bottom: 1,
    left: 65,
  },
  image5: {
    width: 80,
    height: 110,
    bottom: 1,
    left: 65,
  },
  image6: {
    width: 80,
    height: 110,
    bottom: 5,
    left: 55,
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
    fontSize: 17,
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
export default MenItems;
