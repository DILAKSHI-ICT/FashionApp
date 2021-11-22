import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    StyleSheet} from 'react-native';


import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    
    backgroundColor = selected? 'rgba(0, 0, 0, 0.8' : 'rgba(0,0,0,0.3)';

    return (
        <View 
            style = {{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />    
    );
}

const Skip = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Skip</Text>
  </TouchableHighlight>
);
const Next = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Next</Text>
  </TouchableHighlight>
);
const Done = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Done</Text>
  </TouchableHighlight>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}

        pages={[
          {
            backgroundColor: '#f09183',
            image: <Image source={require('../assets/home1.png')} />,
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/home2.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/home3.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
  ]}
    />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create ({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_text: {
        fontSize: 16,
      },
    Button: {
        marginHorizontal: 10,
      },
}); 





