import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputFrameProps = {
    label: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    isObligatory?: boolean;
}
export default function InputFrame({ label, placeholder = '', value, onChangeText, isObligatory = false }: InputFrameProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:{isObligatory ? <Text style={{ ...styles.label, color: '#ECD24A' }}>*</Text> : null}</Text>
            <TextInput
                style={[
                    styles.input,
                    value === '' && isObligatory ? styles.inputError : null
                ]} placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />

            {value === '' && isObligatory
                ? <Text style={{ fontSize: 12, color: '#ECD24A', top: 3 }}>Vui lòng {placeholder.toLowerCase()}</Text>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: 'white',
        fontWeight: '400',
    },
    input: {
        height: 45,
        paddingLeft: 20,
        color: 'black',
        backgroundColor:'white',
        borderRadius: 5,
    },
    inputError: {
        borderColor: '#ECD24A',
        borderWidth: 1.5
    },
});