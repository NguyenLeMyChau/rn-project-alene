import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputFrameProps = {
    label: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    isObligatory?: boolean;
    result?: string | null;
}

export default function InputFrame({ label, placeholder = '', value, onChangeText, isObligatory = false, result }: InputFrameProps) {
    const [colorObligatory, setColorObligatory] = useState('#ECD24A');

    useEffect(() => {
        if (result === 'normal') {
            setColorObligatory('#187B33');
        } else {
            setColorObligatory('#ECD24A');
        }
    }, [result]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:{isObligatory ? <Text style={{ ...styles.label, color: colorObligatory }}>*</Text> : null}</Text>
            <TextInput
                style={[
                    styles.input,
                    value === '' && isObligatory ? styles.inputError : null
                ]} placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />

            {value === '' && isObligatory
                ? <Text style={{ fontSize: 12, color: colorObligatory, top: 3 }}>Vui lòng {placeholder.toLowerCase()}</Text>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 5,
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
        backgroundColor: 'white',
        borderRadius: 5,
    },
    inputError: {
        borderColor: '#ECD24A',
        borderWidth: 1.5
    },
});