import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import anleneLogo from '../../../assets/anlene-logo.png';

export default function Logo() {
    return (
        <Image
            source={anleneLogo}
            style={styles.logo}
        />
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});