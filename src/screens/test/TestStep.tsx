import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import StepContext from './StepProvider';


export default function TestStep() {
    const context = useContext(StepContext);

    if (!context) {
        throw new Error('StepContext must be used within a StepProvider');
    }

    const { steps, currentStep } = context;

    const allStepsCompleted = steps.every(step => step !== null);

    const size = 25;
    const color = 'white';
    const stepIcons: Array<'numeric-1-circle-outline' | 'numeric-2-circle-outline' | 'numeric-3-circle-outline' | 'numeric-4-circle-outline'> = [
        'numeric-1-circle-outline',
        'numeric-2-circle-outline',
        'numeric-3-circle-outline',
        'numeric-4-circle-outline'
    ];
    return (
        <View style={styles.container}>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <View style={styles.step}>
                        {!allStepsCompleted && index === currentStep ? (
                            <AntDesign name="play" size={size} color="#ECD24A" />
                        ) : (
                            step == null ? (
                                <MaterialCommunityIcons name={stepIcons[index]} size={size} color={color} />
                            ) : (
                                <AntDesign
                                    name={step ? 'checkcircle' : 'closecircle'}
                                    size={20}
                                    color={step ? '#73A442' : '#C6463A'}
                                    style={styles.icon}
                                />
                            )
                        )}
                        <Text style={styles.label}>{['Cơ', 'Xương', 'Khớp', 'Đề kháng'][index]}</Text>
                    </View>
                    {index < steps.length - 1 && <View style={styles.line} />}
                </React.Fragment>
            ))}
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
    icon: {
        marginTop: 5,
    },
});
