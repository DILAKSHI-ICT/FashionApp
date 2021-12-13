import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import MenuButton from '../components/menuButton';

const App = () => {
    return (
    <><View style={style.body}>
         <Text style={style.headerText}>WELCOME TO THE</Text>
            <Text style={style.headerText}>CHANU FASHIONS</Text>
            <View style={style.logingButton}>
                <MenuButton text="Women's Fashion" />
                <MenuButton text="Men's Fashion" />
                <MenuButton text="Kid's Fashion" />
                <MenuButton text="Shoes Corner" />
                <MenuButton text="Watch Center" /> 
           
           
                 
          </View>
                
                

        </View></>    
    );
};

const style = StyleSheet.create ({
body: {
    flex: 1,
    backgroundColor: '#BF93C8'
},

headerText: {
    color: '#333',
    fontSize:25,
    alignSelf: 'center',
    top: 20,
    fontWeight: 'bold',
},


    

logingButton: {
    width: 435,
    height: 720,
    backgroundColor: '#804179',
    top: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

})


export default App;





