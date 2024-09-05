import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, View, StyleSheet, Button, Dimensions } from 'react-native';
import TestStep1 from './test-details/TestStep1'; // Import các bước khác nếu cần
import TestStep2 from './test-details/TestStep2';
import TestStep3 from './test-details/TestStep3';
import TestStep4 from './test-details/TestStep4';
import StepContext from '../../hook/StepProvider';

const steps = [
    { id: '1', component: <TestStep1 /> },
    { id: '2', component: <TestStep2 /> },
    { id: '3', component: <TestStep3 /> },
    { id: '4', component: <TestStep4 /> },
];


const { width: screenWidth } = Dimensions.get('window');

export default function Test() {
    const flatListRef = useRef<FlatList>(null);


    const context = useContext(StepContext);
    if (!context) {
        throw new Error('StepContext must be used within a StepProvider');
    }
    const { currentStep } = context;

    useEffect(() => {
        if (flatListRef.current && currentStep >= 0 && currentStep < steps.length) {
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
                data={steps}
                renderItem={({ item }) => (
                    <View style={{ width: screenWidth }}>
                        {item.component}
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
