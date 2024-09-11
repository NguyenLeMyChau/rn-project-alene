import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonCheckProps {
    text?: string;
    onPress?: () => void;
    borderColor?: string;
    fontSize?: number;
    backgroundColor?: string;
    disabled?: boolean;
    color?: string;
    width?: number;
    height?: number;
}

export default function ButtonCheck({ text, onPress, borderColor = '#B70002', fontSize = 16, backgroundColor = '#B70002', disabled = false, color = 'white', height, width }: ButtonCheckProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor, backgroundColor, height, width }]}
            onPress={!disabled ? onPress : undefined}
            disabled={disabled}>
            <Text style={[styles.buttonText, { fontSize, color }]}>{text}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});