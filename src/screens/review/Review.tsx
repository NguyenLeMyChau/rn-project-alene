import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/Logo';
import TextTitle from '../../components/text/TextTitle';
import InputFrame from '../../components/input/InputFrame';
import Checkbox from 'expo-checkbox';
import ButtonCheck from '../../components/button/ButtonCheck';
import BackgroundColor from '../../components/backgroundColor/BackgroundColor';
import { dataResult } from '../../data/dataResult';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Review() {

    const { result } = useSelector((state: RootState) => state.steps);



    return (
        <BackgroundColor stateStrength={result}>
            <Header currentPage={4} />
        </BackgroundColor>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
