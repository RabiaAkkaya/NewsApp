import react from  "react";
import {Image,Text,View,StyleSheet} from "react-native"

const NewsComponent=(props)=> {
    const {title,urlToImage}=props.news
return(
<View style={styles.ViewStyle}>
<Image source={{uri:urlToImage}} style={styles.ImageStyle} />
<Text style={styles.titleStyle}>{title}</Text>

</View>

);
}
const styles=StyleSheet.create({
    ViewStyle:{
        height:250,
        backgroundColor:"#fff",
        elevation:5,
        borderRadius:5,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        marginTop:10

    },
    ImageStyle:{
height:175,
width:null,
flex:1,//kaplayabildigin yeri kapla demek
borderTopLeftRadius:5,
borderTopRightRadius:5
    },
titleStyle:{
    fontSize:18,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    marginLeft:10,
    color:"#000"
}



});

export default NewsComponent;