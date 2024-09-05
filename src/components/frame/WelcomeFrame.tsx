import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

type FrameWelcomeProps = {
    text?: string;
};

export default function WelcomeFrame({ text }: FrameWelcomeProps) {
    return (
        <LinearGradient
            colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.text}>{text}</Text>
        </LinearGradient >

    );
}
const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 1.4,
        borderColor: '#73A442',
        elevation: 15,
        marginHorizontal: 7
    },

    text: {
        color: '#478449',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    iconContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
});