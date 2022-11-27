import React from "react";
import Input from "../components/Input";
import ButtonLogin from "../components/ButtonLogin";
import { View ,StyleSheet,Text,Button,Image} from "react-native";
import HeaderLogin from "../components/HeaderLogin";
export default function LoginScreen() {
    return(
        
        <View style={styles.contain}>
            <HeaderLogin text='Create new account'></HeaderLogin>
            <Input text='Full Name'></Input>
            <Input text='Phone Number'></Input>
            <Input text='Email Address'></Input>
            <Input text='Password'></Input>
            
            <ButtonLogin text='Sign Up' bgcolor='#344D91' color='white' nav='LoginScreen'></ButtonLogin> 
        </View>

    )
}

const styles = StyleSheet.create({
    icon:{
        fontSize:20,
        color:'#5EA33A',  
        
        
    },
    title:{
        fontSize:20,
        color:'#5EA33A',  
        
    },
    contain:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    text:{
        fontSize:17,
        color:'#4A4A4A', 
        marginBottom:50, 
        marginTop:30,
    },
})