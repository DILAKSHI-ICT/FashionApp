import React from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

function MenItems(props) {
  return (
    <><View style={styles.background}>
          <Text style={styles.text}>Find Your Life Style!</Text>
          <View style={styles.logingButton}>
              <Text style={styles.text1}>New Arrivals</Text>
          </View>

          <View style={styles.logingButton1}>

              <Text style={styles.text7}>Mandarin Collar T</Text>
              <Text style={styles.text8}>Rs 3950.00</Text>
              <Image
                  style={styles.image1}
                  source={require('../assets/Images/man1.png')} />
          </View>

          <View style={styles.logingButton2}>

              <Text style={styles.text7}>Crew Neck T-Shirt</Text>
              <Text style={styles.text8}>Rs.1950.00</Text>
              <Image
                  style={styles.image2}
                  source={require('../assets/Images/man2.png')} />
          </View>

          <View style={styles.logingButton3}>
              <Text style={styles.text7}>James Short Sleeve Kurtha</Text>
              <Text style={styles.text8}>Rs.2550.00</Text>
              <Image
                  style={styles.image3}
                  source={require('../assets/Images/man3.png')} />
          </View>

          <View style={styles.logingButton4}>
              <Text style={styles.text7}>Crew Neck T-Shirt</Text>
              <Text style={styles.text8}>Rs.1950.00</Text>
              <Image
                  style={styles.image4}
                  source={require('../assets/Images/man4.png')} />
          </View>

          <View style={styles.logingButton5}>
              <Text style={styles.text7}>Collar Check</Text>
              <Text style={styles.text8}>Rs.2250.00</Text>
              <Image
                  style={styles.image5}
                  source={require('../assets/Images/man5.png')} />
          </View>

          <View style={styles.logingButton6}>
              <Text style={styles.text7}>Matt Detailed Casual</Text>
              <Text style={styles.text8}>Rs.3500.00</Text>
              <Image
                  style={styles.image6}
                  source={require('../assets/Images/man6.png')} />
          </View>

          </View></>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#BF93C8',
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
    backgroundColor: '#804179',
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
    width: 100,
    height: 130,
    top: 8,
    left: 35,
  },
  image2: {
    width: 100,
    height: 130,
    top: 8,
    left: 35,
  },
  image3: {
    width: 100,
    height: 113,
    top: 7,
    left: 37,
  },
  image4: {
    width: 100,
    height: 130,
    top: 8,
    left: 40,
  },
  image5: {
    width: 100,
    height: 130,
    top: 10,
    left: 40,
  },
  image6: {
    width: 100,
    height: 130,
    top: 8,
    left: 40,
  },
  text1: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 35,
    left: 78,
  },
  text2: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    bottom: 3,
    right: 30,
  },
  text3: {
    color: '#000',
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 6,
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
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 550,
    borderRadius: 20,
    left: 20,
  },
  logingButton2: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 535,
    borderRadius: 20,
    left: 20,
  },
  logingButton3: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 517,
    borderRadius: 15,
    left: 20,
  },
  logingButton4: {
    width:180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 1092,
    borderRadius: 20,
    left: 230,
  },
  logingButton5: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 1075,
    borderRadius: 20,
    left: 230,
  },
  logingButton6: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    bottom: 1057,
    borderRadius: 20,
    left: 230,
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
