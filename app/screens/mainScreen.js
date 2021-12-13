import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TextButton from '../components/TextButton';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.footer}>
          <TextButton text="Next" onPress={this.props.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header_top: {
    flex: 2,
    backgroundColor: '#46FCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    backgroundColor: '#46FCFC',
    borderBottomRightRadius: 500,
    height: 200,
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  text_area: {
    width: 350,
    marginTop: 100,
    marginLeft: 25,
    justifyContent: 'space-between',
  },
  footer: {
    flex: 0.5,
  },
});

