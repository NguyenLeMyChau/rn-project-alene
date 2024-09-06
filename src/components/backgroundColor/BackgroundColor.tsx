import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BackgroundColorProps = {
    stateStrength?: string | null;
    children: ReactNode; // Thêm prop children để nhận các phần tử con
}
export default function BackgroundColor({ stateStrength = 'good', children }: BackgroundColorProps) {
    const [color, setColor] = useState(['#0E470E', '#20680D', '#2E820D', '#13500E']);
    const locations = color.length === 3 ? [0, 0.5, 1] : [0, 0.4, 0.724, 1];

    useEffect(() => {
        switch (stateStrength) {
            case 'good':
                return setColor(['#0E470E', '#20680D', '#2E820D', '#13500E']);
                ;
            case 'normal':
                return setColor(['#FD9500', '#FEBF00', '#FB8402']);

            case 'bad':
                return setColor(['#B0B0B0', '#969696', '#808080']);
            default:
                return setColor(['#0E470E', '#20680D', '#2E820D', '#13500E']);

        }
    }, [stateStrength]);

    return (
        <LinearGradient
            colors={color}
            locations={locations}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            {children}
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});