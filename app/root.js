import {StatusBar} from 'expo-status-bar'; 
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Buy Luxury Clothes',
    text: 'Premium & prestige car. Get your best car in the fastest way.',
    image: require("./assets/Images/1.jpg"),
  },

  {
    key: 'two',
    title: 'Choose Your Fashion',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/2.jpg"),
  },

  {
    key: 'three',
    title: 'Complete The Process',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/3.png"),
  },

  {
    key: 'four',
    title: 'Get The Best One',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/4.jpg"),
  },

  {
    key: 'five',
    title: 'Limited Stock ',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/5.jpg"),
  },

  {
    key: 'six',
    title: 'Limited Stock ',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/6.jpg"),
  },

  {
    key: 'seven',
    title: 'Limited Stock ',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require("./assets/Images/7.jpg"),
  },
];

export default class App extends React.Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#21465b',
            alignSelf: 'center',
          }}
        >
          {item.title}
        </Text>

        <Text style={{
            textAlign: 'center',
            color: '#b5b5b5',
            fontSize: 15,
            paddingHorizontal: 30,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };
  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: '#21465b',
            width: 30,
          }}
        />
      );
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});