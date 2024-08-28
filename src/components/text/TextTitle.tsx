import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface TextTitleProps {
    text: string;
    fontSize?: number;
    height?: number;
}

export default function TextTitle({ text, fontSize = 22, height = 27 }: TextTitleProps) {
    return (
        <MaskedView
            style={[styles.maskedView, { height }]}
            maskElement={
                <Text style={[styles.title, { fontSize }]}>
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={['#BA872C', '#E8E276', '#E1D770', '#885021']}
                start={{ x: -0.1, y: 0.5 }}
                end={{ x: 1.2, y: 0.5 }}
                style={styles.gradient}
            />
        </MaskedView>
    );
}

const styles = StyleSheet.create({
    maskedView: {
        width: '100%',
        flexDirection: 'row',
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 28,
        backgroundColor: 'transparent',
    },

    gradient: {
        flex: 1
    },
});