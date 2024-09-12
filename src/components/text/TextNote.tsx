import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface TextNoteProps {
    text: string;
    textAlign?: 'center' | 'left' | 'right' | 'justify';
    size?: number;
    marginTop?: number;
    marginBottom?: number;
}

export default function TextNote({ text, textAlign = 'center', size = 9, marginTop, marginBottom = 10 }: TextNoteProps) {

    return (
        <Text style={[styles.text, { textAlign, fontSize: size, marginTop, marginBottom }]}>{text}</Text>
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