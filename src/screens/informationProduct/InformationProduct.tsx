import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/Logo';
import BackgroundColor from '../../components/backgroundColor/BackgroundColor';
import TextTitle from '../../components/text/TextTitle';
import Milk from '../../../assets/milk.png';
import Img1 from '../../../assets/Img-1.png';
import Img2 from '../../../assets/Img-2.png';
import Img3 from '../../../assets/Img-3.png';

export default function InformationProduct() {
    return (
        <BackgroundColor stateStrength={'good'}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <Header currentPage={6} />
                <Logo width={120} height={100} />
                <TextTitle text={"THÔNG TIN SẢN PHẨM"} fontSize={20} result={'good'} />
                <TextTitle text={"SỮA ANLENE 3 KHỎE"} fontSize={16} marginTop={-5} result={'good'} />

                <View style={styles.imageContainer}>
                    <Image source={Milk} style={styles.imgMilk} />
                </View>

                <View style={{ paddingHorizontal: 25 }}>
                    <Text style={styles.text}>Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động, chẳng ngại
                        “rào cản” tuổi tác.</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={Img1} style={styles.imgFrame} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={Img2} style={styles.imgFrame} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={Img3} style={styles.imgFrame} />
                </View>
            </ScrollView>

        </BackgroundColor>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: -5,
    },
    imgMilk: {
        width: 350,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: -30,
        borderRadius: 18,
    },
    text: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        lineHeight: 19,
    },
    imgFrame: {
        width: '80%',
        height: 250,
        resizeMode: 'contain',
    },
});