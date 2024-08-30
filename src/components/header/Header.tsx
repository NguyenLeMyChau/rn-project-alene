import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Logo from '../logo/Logo';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    useEffect(() => {
        console.log("currentPage updated:", currentPage);
    }, [currentPage]);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <View style={styles.container}>

            {currentPage > 1 ? (
                <TouchableOpacity style={styles.iconButton} onPress={goToPreviousPage}>
                    <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
            )
                : <View style={{ width: 80 }} />

            }

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.iconButton} onPress={goToPreviousPage} >
                    <AntDesign name="left" size={16} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Trang {currentPage}/{totalPages} </Text>

                <TouchableOpacity style={styles.iconButton} onPress={goToNextPage}>
                    <AntDesign name="right" size={16} color="white" />
                </TouchableOpacity>
            </View>

            {currentPage > 1 ? (
                <TouchableOpacity style={styles.iconButton} onPress={goToPreviousPage}>
                    <Entypo name="home" size={25} color="white" />
                </TouchableOpacity>
            ) : <Logo />
            }



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 35
    },

    iconButton: {
        padding: 10,
    },

    title: {
        fontSize: 12,
        color: 'white'
    }
});
