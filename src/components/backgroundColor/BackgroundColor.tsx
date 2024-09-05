import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

export default function BackgroundColor() {
    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            locations={[0, 0.4, 0.724, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});