import React from "react";
import { View ,StyleSheet,Text,Image, FlatList, Button} from "react-native";
import slides from "../../slides";

import BgroundOnBoardingItems from "./OnBoardingItems";

export default function BgroundOnBoarding(){
    return (
        <View style={styles.bground}>
            
            <View>
            <FlatList data={slides} renderItem={({item}) => <BgroundOnBoardingItems item ={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
            />
            </View>
            <Text style={styles.link}>Please press to continue </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
   
    bground: {
      flex: 1,
      backgroundColor: '#5ea33a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
       marginBottom:90,
       marginTop:30,
        fontSize:18,
        color:'white',
        fontWeight:'600'
      },
  });