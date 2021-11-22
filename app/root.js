
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import MenuButton from './components/menuButton';

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
    image: require("./assets/Images/8.jpg"),
  },
];

export default class App extends React.Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <><View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
            backgroundColor: '#e2e2e1',
          }} />
        <Text
          style={{
            paddingTop: 40,
            paddingBottom: 60,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#21465b',
            alignSelf: 'center',
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign: 'center',
          paddingBottom: 60,
          color: '#b5b5b5',
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 10,
        }}>
          {item.text}
        </Text>
      </View><View>
          <MenuButton onPress={this.props.handleSubmit} />
        </View></>
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
            backgroundColor: '#333',
            width: 20,
          }}
        />

        
      );
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#e2e2e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});