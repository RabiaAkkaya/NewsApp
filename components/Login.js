import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image, 
} from 'react-native';
import {firebase} from '../config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    
      try{    
        await firebase.auth().signInWithEmailAndPassword(email, password);
        Alert.alert("Login Successful', 'You are now logged in.");
        await AsyncStorage.setItem('isLogin','1');
        navigation.navigate("News"); //Giriş başarılı ise News'a gönder
      }catch (error){
        console.log(error.message);
        Alert.alert("'Error', 'An error occurred while logging in.' ${error.message}");
      }
    
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/news.png')} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button style={styles.button} title="Login" onPress={loginUser} />
      <TouchableOpacity
   onPress={
      ()=>{
        navigation.navigate('Signup');  
    } 
  }> 
    <Text style={styles.text} >Sign Up</Text>
 </TouchableOpacity>

 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",     
    flex: 1,    
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8, 
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
    
  },
  
  title: {
    textAlign:"center",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
    button: {
    height: 10,  
    marginBottom: 10,
    
  },
  logo: {
    height: 118,
    width: 188,   

  },
  text: {
   color:"darkblue",
   padding:5,

  }
 
});