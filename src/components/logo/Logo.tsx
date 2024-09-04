import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import anleneLogo from '../../../assets/anlene-logo.png';

type LogoProps = {
    width?: number;
    height?: number;
}

export default function Logo({ width = 80, height = 80 }: LogoProps) {
    return (
        <Image
            source={anleneLogo}
            style={[styles.logo, { width, height }]}
        />
    );
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});