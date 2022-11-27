import React from "react";
import { Button, View,StyleSheet, TouchableOpacity, Text, TouchableHighlight, TextInput } from "react-native";

export default function BgroundOnBoarding({text}){
  
    return(
        <TextInput style={styles.input} placeholder={text}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input:{
        width:323,
        height:53,
       borderRadius:26,
       
        marginBottom:30,
        borderWidth:1,
        paddingLeft:30,
        borderColor:'#9B9B9B',
        
    },
    
})