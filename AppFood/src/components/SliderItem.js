import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function SliderItem({ item }) {
    return (
        <View style={styles.container}>
            <Image style={styles.sliderImg} source={item.image} />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.sliderTitle}>{item.title}</Text>
                <Text style={styles.sliderDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5EA33A',
    },
    sliderImg: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 50,
    },
    sliderTitle: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center',
        marginLeft: 8,
        marginBottom: 30,
    },
    sliderDescription: {
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 17,
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center',
    }
})