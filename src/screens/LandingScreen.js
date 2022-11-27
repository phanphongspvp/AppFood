import React from "react";
import ButtonLogin from "../components/ButtonLogin";
import { View ,StyleSheet,Text,Button,Image} from "react-native";


export default function OnBoarding() {
    
    return(
        <View style={styles.contain}>
                <Image source={require('../../assets/icons8-restaurant-menu-101.png')} style={styles.logo} ></Image> 
                <Text style={styles.title_head} >Welcome to our restaurant</Text>
                <Text style={styles.title_content}>Order food and make reservations</Text>
                <Text style={[styles.title_content,{marginBottom: 60,}]}>with one click.</Text>  
            <ButtonLogin text='Log In' bgcolor='#5ea33a' color='white' nav='LoginScreen'>
            
            </ButtonLogin>   
            <ButtonLogin text='Sign Up' border={1}  nav='SignUpScreen' >
            
            </ButtonLogin>  
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        alignItems:'center',
        
        
    },
    logo: {
        tintColor:'#5ea33a',
        marginTop:120,
        marginBottom:40,
      },
      title_head: {
        marginBottom: 20,
        fontSize:17,
        color:'#5ea33a',
      },
      title_content: {

        fontSize:17    
      },
})