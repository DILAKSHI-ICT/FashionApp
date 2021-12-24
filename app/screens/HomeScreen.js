import React, {useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import MenuButton from '../components/menuButton';
import LogoutButton from '../components/LogoutButton';
import ProfileButton from '../components/profileButton';


const HomeScreen = ({navigation}) => {

    const {user, logout} = useContext(AuthContext);

    return (
        <><View style={style.body}>
        <Text style={style.headerText}>WELCOME TO THE CHANU FASHIONS</Text>
        
            
            <LogoutButton buttonTitle = 'Logout' onPress = {() => logout()} />
        

        
            <View style={style.logingButton}>
                <MenuButton text="Women's Fashion" onPress={() => navigation.navigate('WomenItems')}/>
                <MenuButton text="Men's Fashion" onPress={() => navigation.navigate('MenItems')}/>
                <MenuButton text="Kid's Fashion" onPress={() => navigation.navigate('KidsItems')}/>
                <MenuButton text="Shoes Corner" onPress={() => navigation.navigate('Footware')}/>
                <MenuButton text="Watch Center" onPress={() => navigation.navigate('watches')}/> 
                <ProfileButton text="Profile" onPress={() => navigation.navigate('Profile')}/> 

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
        backgroundColor: '#E391A9'
    },
    
    headerText: {
        color: '#333',
        fontSize:22,
        top: 65,
        fontWeight: 'bold',
        textAlign: 'center',
    },        
    
    logingButton: {
        width: 435,
        height: 550,
        backgroundColor: '#CB3461',
        top: -600,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    


      }
    
});

export default HomeScreen;