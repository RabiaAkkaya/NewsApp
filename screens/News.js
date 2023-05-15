import React,{Component} from 'react'
import {View,StyleSheet,SafeAreaView,Text,ScrollView,TouchableOpacity ,Linking,Button } from 'react-native'
import NewsComponent from './NewsComponent';
import { API } from './constant';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class News extends Component{ 
    
    constructor()
    {
        super();
        this.state={
        news:[],
        user:''

        }
    }
    componentDidMount(){
     axios.get(API)
        .then((response)=> { 
            const {articles}=response.data;   
            this.setState({ 
                news:articles
           
            });
            AsyncStorage.getItem('user').then(user => {
                this.setState({ user });
              });
           
        })
    .catch((error)=>
    {
 alert(error);

    })
}
SignOut=async()=>
{
    this.props.navigation.navigate("Login");
    await AsyncStorage.setItem('isLogin','0');
}
mapToData=()=>
{
    return this.state.news.map((data)=>
    {
        return(
      <TouchableOpacity onPress={()=>{ Linking.openURL(data.url)}}>
  <NewsComponent news={data} key={data.url}/>
       </TouchableOpacity>
        );
      
    
});
}

    render(){//kullanımı zorunlu
        return (
            <SafeAreaView>
              <ScrollView>
                <View style={{
                  height: 60,
                  backgroundColor: "#0591c2",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 25,
                }}>
                    <Text style={{
    flex: 1,
    color: '#fff',
    fontSize: 25
    
}}>
    News
</Text>
<Text style={{

    color: '#fff',
    fontSize: 12,
    textAlign: 'right',
    padding:5
}}>
    {this.state.user} 
</Text>
<Button
    title="Sign Out"
    color="red"    
    onPress={this.SignOut}

/>

                </View>
                {this.mapToData()}
              </ScrollView>
            </SafeAreaView>
          );
          

    }
}

const styles=StyleSheet.create({
ViewStyle:{
    
 backgroundColor:"#000", 

}
})







































