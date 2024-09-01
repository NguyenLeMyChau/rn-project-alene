import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TestStep() {
    const size = 25;
    const color = 'white';

    return (
        <View style={styles.container}>
            <View style={styles.step}>
                <MaterialCommunityIcons name="numeric-1-circle-outline" size={size} color={color} />
                <Text style={styles.label}>Cơ</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
                <MaterialCommunityIcons name="numeric-2-circle-outline" size={size} color={color} />
                <Text style={styles.label}>Xương</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
                <MaterialCommunityIcons name="numeric-3-circle-outline" size={size} color={color} />
                <Text style={styles.label}>Khớp</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.step}>
                <MaterialCommunityIcons name="numeric-4-circle-outline" size={size} color={color} />
                <Text style={styles.label}>Đề kháng</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#FFFFFF26',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 12
    },
    step: {
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
    },
    line: {
        width: 60,
        height: 1.5,
        backgroundColor: 'white',
        borderStyle: 'dashed',
        marginHorizontal: -28,
        marginTop: -27,
    },
    label: {
        color: 'white',
        marginTop: 5,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16
    },
});
