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
        
                <MenuButton text="Women's Fashion" />
                <MenuButton text="Men's Fashion" />
                <MenuButton text="Kid's Fashion" />
                <MenuButton text="Shoes Corner" />
                <MenuButton text="Watch Center" />


            </View></>    
    );
};

const style = StyleSheet.create ({
body: {
    flex: 1,
    backgroundColor: '#333'
},

headerText: {
    color: '#FFF',
    fontSize:25,
    alignSelf: 'center',
    top: 20
},


})


export default App;





