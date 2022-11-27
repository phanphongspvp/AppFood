import React from "react";
import Input from "../components/Input";
import ButtonLogin from "../components/ButtonLogin";
import { View ,StyleSheet,Text,Button,Image} from "react-native";
import HeaderLogin from "../components/HeaderLogin";
export default function LoginScreen() {
    return(
        
        <View style={styles.contain}>
            <HeaderLogin text='Sign In'></HeaderLogin>
            <Input text='Email or phone number'></Input>
            <Input text='Password'></Input>
            <ButtonLogin text='Log In' bgcolor='#5ea33a' color='white' nav='LoginScreen'></ButtonLogin>
           
            <Text style={styles.text}>OR</Text> 
           
            <ButtonLogin text='Facebook Login' bgcolor='#344D91' color='white' nav='LoginScreen'></ButtonLogin> 
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