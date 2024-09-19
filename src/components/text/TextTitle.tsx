import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TextTitleProps {
    text: string;
    fontSize?: number;
    marginTop?: number;
    result?: string | null;
    onPress?: () => void;
}

export default function TextTitle({ text, fontSize = 22, marginTop, result, onPress }: TextTitleProps) {
    const textLength = text.length;
    const locations = textLength >= 20
        ? [0, 0.35, 0.65, 1]
        : [0.2, 0.45, 0.5, 1];
    const colors = textLength >= 20
        ? ['#BA872C', '#E8E276', '#E1D770', '#885021']
        : ['#7A5A1C', '#E8E276', '#E8E276', '#7A5A1C'];

    const goodColor = ['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200'];
    const goodLocations = [0, 0.25, 0.7, 0.8, 1];

    const normalColor = ['#376E48', '#187B33'];
    const normalLocations = [0, 0.5];

    const badColor = ['#DF1E13', '#C62828'];
    const badLocations = [0, 0.5];

    const resultColor = result === 'good' ? goodColor : result === 'normal' ? normalColor : badColor;
    const resultLocations = result === 'good' ? goodLocations : result === 'normal' ? normalLocations : badLocations;

    const height = fontSize <= 13 ? fontSize * 2.5 : fontSize * 1.5;

    const content = (
        <MaskedView
            style={{ ...styles.maskedView, height: height }}
            maskElement={
                <View style={styles.centered} >
                    <Text style={[styles.title, { fontSize, marginTop }]}>
                        {text}
                    </Text>
                </View>
            }
        >
            <LinearGradient
                colors={result ? resultColor : colors}
                locations={result ? resultLocations : locations}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 2 }}
                style={styles.gradient}
            />
        </MaskedView>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {content}
            </TouchableOpacity>
        );
    }

    return content;
}


const styles = StyleSheet.create({
    maskedView: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 28,
        backgroundColor: 'transparent',
    },
    gradient: {
        flex: 1,
    },
});
