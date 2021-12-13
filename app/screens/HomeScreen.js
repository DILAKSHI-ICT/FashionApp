import React, {useContext} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

import MenuButton from '../components/menuButton';

const HomeScreen = () => {

    const {user, logout} = useContext(AuthContext);

    return (
        <><View style={style.body}>
        <Text style={style.headerText}>WELCOME TO THE CHANU FASHIONS</Text>
        
            
            <FormButton buttonTitle = 'Logout' onPress = {() => logout()} />
        

        
            <View style={style.logingButton}>
                <MenuButton text="Women's Fashion" />
                <MenuButton text="Men's Fashion" />
                <MenuButton text="Kid's Fashion" />
                <MenuButton text="Shoes Corner" />
                <MenuButton text="Watch Center" /> 
            </View>
        </View></>

    );

}



const style = StyleSheet.create({
   
    text: {
        fontSize: 20,
        color: '#333333'
    },
    body: {
        flex: 1,
        backgroundColor: '#BF93C8'
    },
    
    headerText: {
        color: '#333',
        fontSize:22,
        top: 55,
        fontWeight: 'bold',
        textAlign: 'center',
    },        
    
    logingButton: {
        width: 435,
        height: 550,
        backgroundColor: '#804179',
        top: -600,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    


      }
    
});

export default HomeScreen;