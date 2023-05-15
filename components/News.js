import React,{Component} from 'react'
import {View,StyleSheet,SafeAreaView,Text,ScrollView,TouchableOpacity ,Linking,Button } from 'react-native'
import NewsComponent from './NewsComponent';
import { API } from './constant';
import axios from "axios";

export default class News extends Component{
    constructor()
    {
        super();
        this.state={
        news:[]

        }
    }
    componentDidMount(){
     axios.get(API)
        .then((response)=> { 
            const {articles}=response.data;   
            this.setState({ 
                news:articles
           
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
return(
   <SafeAreaView>
    <ScrollView>
        
<View style={{
    height:60,
    backgroundColor:"#0591c2",
    justifyContent:"center"
}}>
    <Text style={{
        color:'#fff',
        fontSize:18,
        marginLeft:25

    }}>News
    </Text>
   
</View>
{this.mapToData()}

<Button
         title = "Sign Out"
         color = "red"
         onPress={this.SignOut} 
      />
</ScrollView>
   </SafeAreaView>
)

    }
}

const styles=StyleSheet.create({
ViewStyle:{
    
 backgroundColor:"#000", 

}
})







































