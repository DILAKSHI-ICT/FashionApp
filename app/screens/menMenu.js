
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import  MyCarousel from '../components/gallery1';
import TextButton from '../components/TextButton';

export default class menClothes extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>MEN'S STYLES</Text>   
           <MyCarousel/>     
        </View>
        <View style={styles.footer}>
          <View style={styles.container}>
           <TextButton/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:  '#A2BDD0',
  },
  header: {
    flex: 3,
    backgroundColor: '#A2BDD0',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.6,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#6C97B5',
  },
  images: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginTop: 750,
    marginLeft: 15,
  },
  heading: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 110,
  },
});
