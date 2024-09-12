import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type ReviewFrameProps = {
    img?: any;
    titleReview: string;
    textReview: string;
};
export default function ReviewFrame({ img, titleReview, textReview }: ReviewFrameProps) {

    return (
        <View style={styles.borderContainer}>
            <Image source={img} style={styles.imgReview} />
            <LinearGradient
                colors={['#376E48', '#187B33']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <Text style={styles.text}>{titleReview}</Text>
                <Text style={styles.textYellow}>{textReview}</Text>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    borderContainer: {
        overflow: 'hidden',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    container: {
        width: 'auto',
        height: 55,
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    text: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '600',
    },

    textYellow: {
        color: '#ECD24A',
        fontSize: 11,
        textAlign: 'center',
        fontWeight: '900',
    },

    imgReview: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

});
