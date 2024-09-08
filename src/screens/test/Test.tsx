import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions } from 'react-native';
import StepContext from '../../hook/StepProvider';
import TestFrame from '../../components/frame/TestFrame';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const { width: screenWidth } = Dimensions.get('window');

export default function Test() {
    const flatListRef = useRef<FlatList>(null); // ref cho FlatList

    const { currentStep, stepData } = useSelector((state: RootState) => state.steps);

    useEffect(() => {
        if (flatListRef.current && currentStep >= 0 && currentStep < stepData.length) {
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
                data={stepData}
                renderItem={({ item }) => (
                    <View style={{ width: screenWidth }}>
                        <TestFrame
                            title={item.title}
                            img={item.img}
                            textImg={item.textImg}
                            textYes={item.textYes}
                            textNo={item.textNo}
                            isVideo={item.isVideo}
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
