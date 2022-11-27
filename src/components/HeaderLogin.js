import React from "react";
import { Button,Image, View,StyleSheet, TouchableOpacity, Text, TouchableHighlight, TextInput } from "react-native";

export default function HeaderLogin({text}){
  
    return(
        <View style={styles.contain}>
            <Image style={styles.icon} source={require('../../assets/noun_back_2392166.png')}></Image>         
            <Text  style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        
        position:'absolute',
        top:0,
        left:25,
       
    },
    icon:{
        fontSize:20,
        color:'#5EA33A',  
        marginBottom:25,
    },
    title:{
        fontSize:20,
        color:'#5EA33A',  
        
    },
    
})