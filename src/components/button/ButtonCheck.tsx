import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonCheckProps {
    text?: string;
    onPress?: () => void;
    borderColor?: string;
    fontSize?: number;
}

export default function ButtonCheck({ text, onPress, borderColor = '#B70002', fontSize = 16 }: ButtonCheckProps) {
    return (
        <TouchableOpacity style={[styles.button, { borderColor }]} onPress={onPress}>
            <Text style={[styles.buttonText, { fontSize }]}>{text}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B70002',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});