import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface TextNoteProps {
    text: string;
}

export default function TextNote({ text }: TextNoteProps) {

    return (
        <Text style={styles.text}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 9,
        fontWeight: '400',
        textAlign:'justify',
        fontStyle:'italic',
        marginBottom: 10
    },
});