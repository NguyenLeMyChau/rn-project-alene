import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface TextTitleProps {
    text: string;
    fontSize?: number;
    height?: number;
    only?: boolean;

}

export default function TextTitle({ text, fontSize = 22, height = 27, only = false }: TextTitleProps) {
    const textLength = text.length;
    const locations = textLength >= 30
        ? [0, 0.35, 0.65, 1]
        : [0.2, 0.45, 0.5, 1];
    const colors = textLength >= 30
        ? ['#BA872C', '#E8E276', '#E1D770', '#885021']
        : ['#7A5A1C', '#E8E276', '#E8E276', '#7A5A1C'];

    const onlyColors = ['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200'];
    const onlyLocations = [0, 0.25, 0.7, 0.8, 1];

    return (
        <MaskedView
            style={[styles.maskedView, { height }]}
            maskElement={
                <View style={styles.centered}>
                    <Text style={[styles.title, { fontSize }]}>
                        {text}
                    </Text>
                </View>
            }
        >
            <LinearGradient
                colors={only ? onlyColors : colors}
                locations={only ? onlyLocations : locations}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 2 }}
                style={styles.gradient}
            />
        </MaskedView>
    );
}

const styles = StyleSheet.create({
    maskedView: {
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
