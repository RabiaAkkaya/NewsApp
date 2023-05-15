import React, { useState } from 'react';
import {
TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import {firebase} from '../config';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


  const signupUser = async () => {
    try{
      if(password==password2){
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        Alert.alert("Register Success!.");
        navigation.navigate("Login"); //hesap oluşturma başarılı ise Logine gönder
      }
      else
      Alert.alert("passwords do not match");
      }catch (error){
                Alert.alert( `Error: ${error.message}`);
      }
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/news.png')} />
      <Text style={styles.title}>Signup</Text>
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
       <TextInput
        style={styles.input}
        value={password2}
        onChangeText={setPassword2}
        placeholder="Password Again"
        secureTextEntry
      />
      <Button title="Signup" onPress={signupUser} />
      <TouchableOpacity
   onPress={
      ()=>{
        navigation.navigate('Login');  
    } 
  }> 
    <Text style={styles.text} >Login</Text>
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