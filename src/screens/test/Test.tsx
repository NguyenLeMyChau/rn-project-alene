import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions } from 'react-native';
import StepContext from '../../hook/StepProvider';
import TestFrame from '../../components/frame/TestFrame';

const { width: screenWidth } = Dimensions.get('window');

export default function Test() {
    const flatListRef = useRef<FlatList>(null); // ref cho FlatList

    const context = useContext(StepContext);
    if (!context) {
        throw new Error('StepContext must be used within a StepProvider');
    }
    const { currentStep, data } = context;

    useEffect(() => {
        if (flatListRef.current && currentStep >= 0 && currentStep < data.length) {
            flatListRef.current.scrollToIndex({ index: currentStep, animated: true });
        }

    }, [currentStep]);

    const getItemLayout = (data: any, index: number) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index,
    });

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => (
                    <View style={{ width: screenWidth }}>
                        <TestFrame
                            title={item.title}
                            img={item.img}
                            textImg={item.textImg}
                            textYes={item.textYes}
                            textNo={item.textNo}
                            isVideo={item.isVideo}
                            stopTimeout={item.stopTimeout}
                        />
                    </View>
                )}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                getItemLayout={getItemLayout}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
