import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonCheckProps {
    text?: string;
    onPress?: () => void;
    borderColor?: string;
    fontSize?: number;
    backgroundColor?: string;
    disabled?: boolean;
    color?: string;
}

export default function ButtonCheck({ text, onPress, borderColor = '#B70002', fontSize = 16, backgroundColor = '#B70002', disabled = false, color = 'white' }: ButtonCheckProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor, backgroundColor }]}
            onPress={!disabled ? onPress : undefined}
            disabled={disabled}>
            <Text style={[styles.buttonText, { fontSize, color }]}>{text}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});