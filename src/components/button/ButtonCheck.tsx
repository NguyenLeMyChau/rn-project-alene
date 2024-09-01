import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonCheckProps {
    text?: string;
    onPress?: () => void;
    borderColor?: string;
    fontSize?: number;
    backgroundColor?: string;
}

export default function ButtonCheck({ text, onPress, borderColor = '#B70002', fontSize = 16, backgroundColor = '#B70002' }: ButtonCheckProps) {
    return (
        <TouchableOpacity style={[styles.button, { borderColor, backgroundColor }]} onPress={onPress}>
            <Text style={[styles.buttonText, { fontSize }]}>{text}</Text>
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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});