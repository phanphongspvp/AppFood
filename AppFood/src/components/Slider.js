import React, { useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList, Animated } from 'react-native'
import DataSlider from '../data/DataSlider'
import SliderItem from './SliderItem'
import SliderPage from './SliderPage'

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const sliderRef = useRef(null);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={{ flex: 3 }}>
                <FlatList
                    data={DataSlider}
                    renderItem={({ item }) => <SliderItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    ref={sliderRef}
                    viewabilityConfig={viewConfig}
                />
            </View>
            <SliderPage data={DataSlider} scrollX={scrollX} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})