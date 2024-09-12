import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Logo from '../logo/Logo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Popup from '../popup/Popup';

type HeaderProps = {
    currentPage: number;
};

export default function Header({ currentPage }: HeaderProps) {
    const navigation = useNavigation<NavigationProp<any>>();
    const pages = ['Welcome', 'Test', 'Submit', 'Review', 'LinkProduct', 'InformationProduct'];
    const [isOpenPopup, setOpenPopup] = useState(false);
    const totalPages = pages.length;

    const [page, setPage] = useState(currentPage - 1);

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const handleLeftPress = () => {
        if (page > 0) {
            if (page !== 1) {
                setPage(page - 1);
                navigation.navigate(pages[page - 1]);
            } else {
                setOpenPopup(true);
            }
        }
    };

    return (
        <View style={styles.container}>

            {page > 0 ? (
                <TouchableOpacity style={styles.iconButton} onPress={handleLeftPress}>
                    <AntDesign name="left" size={25} color="white" />
                </TouchableOpacity>
            )
                : <View style={{ width: 80 }} />

            }

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.iconButton} >
                    <AntDesign name="left" size={16} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Trang {page + 1}/{totalPages} </Text>

                <TouchableOpacity style={styles.iconButton} >
                    <AntDesign name="right" size={16} color="white" />
                </TouchableOpacity>
            </View>

            {page > 0 ? (
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Welcome')}>
                    <Entypo name="home" size={26} color="white" />
                </TouchableOpacity>
            ) : <Logo />
            }

            <Popup
                visible={isOpenPopup}
                title="THÔNG BÁO!"
                textbody="Bạn có muốn huỷ bỏ kết quả kiểm tra sức khoẻ trước đó không?"
                buttonTextYes="ĐỒNG Ý"
                onClose={handleClosePopup}
                onPressYes={() => {
                    setPage(page - 1);
                    navigation.navigate(pages[page - 1]);
                }}
            />



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
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
