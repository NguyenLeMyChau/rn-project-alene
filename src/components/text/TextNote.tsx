import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface TextNoteProps {
    text: string;
    textAlign?: 'center' | 'left' | 'right' | 'justify';
}

export default function TextNote({ text, textAlign = 'center' }: TextNoteProps) {

    return (
        <Text style={[styles.text, { textAlign }]}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 9,
        fontWeight: '400',
        fontStyle: 'italic',
        marginBottom: 10
    },
});