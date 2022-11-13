import React from 'react'
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native'

export default function SliderPage({ data, scrollX }) {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.nextPage}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [7, 7, 7],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: 'clamp',
                })

                return <Animated.View
                    style={[
                        styles.dot,
                        {
                            width: dotWidth,
                            opacity,
                        },
                    ]}
                    key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 7,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
    },
    nextPage: {
        flexDirection: 'row',
        backgroundColor: '#5EA33A',
        position: 'absolute',
        alignItems: 'center',
        top: 574,
        width: 75,
    }
})