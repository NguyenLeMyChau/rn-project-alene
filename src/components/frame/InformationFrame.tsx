import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageTest from '../../../assets/page-6-1-removebg.png';

type InformationFrame = {
    img?: string;
};

export default function InformationFrame({ img }: InformationFrame) {
    return (
        <LinearGradient
            colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.borderContainer}
        >
            <LinearGradient
                colors={['#73A442', '#478449']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                
                <Image source={ImageTest} style={styles.iconContainer}/>

            </LinearGradient>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    borderContainer: {
        padding: 2.4,
        borderRadius: 18,
        borderWidth: 1.4,
        borderColor: 'transparent',
        marginHorizontal: 20,
        marginTop: 20
    },
    container: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    text: {
        color: '#478449',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
});