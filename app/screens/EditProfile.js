import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';



const EditProfile = ({navigation})=> {
 
  
  return (
    
    <View style={styles.background}>

      <Text style={styles.text}>USER PROFILE</Text> 

      <View style={styles.logingButton} />

      <Image    
        style={styles.image}
        source={require('../assets/Images/Profile.jpeg')}
      />

      

      <TouchableOpacity
            onPress={() =>  navigation.navigate('Profile')}>
            
            <Text>Logout</Text>
</TouchableOpacity>


      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="Dilakshi Abeysinghe" />
      </View>

      <Text></Text>

      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="No.253, Panadura" />
      </View>

      <Text></Text>

      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="0772456235" />
      </View>

      <Text></Text>
      <View style={styles.logingButton1}>
        <TextInput style={styles.text10} placeholder="cdkabeysinghe@gmail.com" />
      </View>

       
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.logingButton5}>
          <Text style={styles.text7}>SAVE</Text>
        </View>
      </TouchableOpacity> 

<Text></Text>
       
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={styles.logingButton5}>
          <Text style={styles.text7}>EXIT</Text>
        </View>
      </TouchableOpacity> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E391A9',
  },

  text: {
    color: '#333',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 2,
  },
  logingButton: {
    width: 435,
    height: 680,
    backgroundColor: '#CB3461',
    top: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logingButton1: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    bottom: 630,
    borderRadius: 10,
    left: 65,
    borderWidth: 1,
  },
  logingButton5: {
    width: 130,
    height: 60,
    backgroundColor: '#8a246b',
    bottom: 600,
    borderRadius: 10,
    left: 150,
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
    bottom: 683,
    left: 140,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#333'
  },
 
  
  text2: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    bottom: 300,
    fontWeight: 'bold',
    left: 10,
  },
  
  text7: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    top: 15,
    left: 5,
    fontWeight: 'bold',
  },
  
  text7: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    top: 15,
  },
  text10: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 15,
    left: 15,
    padding: 2,
  },
  text11: {
    color: '#403F3F',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Poppins',
    top: 15,
    left: 15,
    padding: 2,
  },
});

export default EditProfile;

