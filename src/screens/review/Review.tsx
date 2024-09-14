import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/Logo';
import TextTitle from '../../components/text/TextTitle';
import ButtonCheck from '../../components/button/ButtonCheck';
import BackgroundColor from '../../components/backgroundColor/BackgroundColor';
import { dataResult } from '../../data/dataResult';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ReviewFrame from '../../components/frame/ReviewFrame';
import KhoiCo from '../../../assets/khoico.png';
import MatDoXuong from '../../../assets/matdoxuong.png';
import Khop from '../../../assets/khop.png';
import MilkYellow from '../../../assets/anlene-four-cicrle-yellow.png';
import Milk from '../../../assets/anlene-four-cicrle.png';
import TextNote from '../../components/text/TextNote';
import * as Animatable from 'react-native-animatable';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Review() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [seeMore, setSeeMore] = useState(false);
    const result = useSelector((state: RootState) => state.steps.result);
    const resultData = dataResult.find(item => item.result === result) || { titleReview: '', textReview: '', textSequel: '', anleteText: '' };
    const titleReview = resultData.titleReview || '';

    return (
        <BackgroundColor stateStrength={result}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}>
                <Header currentPage={4} />
                <Logo width={120} height={100} />

                <View style={{ paddingHorizontal: 10 }}>
                    <TextTitle text={titleReview} fontSize={24} height={35} result={result} />

                    <Text style={styles.text}>{resultData.textReview}</Text>

                    <View style={styles.threeimg}>
                        <ReviewFrame
                            img={KhoiCo}
                            titleReview='KHỐI CƠ'
                            textReview='MẤT ĐI'
                        />

                        <ReviewFrame
                            img={MatDoXuong}
                            titleReview='MẬT ĐỘ XƯƠNG'
                            textReview='SUY GIẢM'
                        />

                        <ReviewFrame
                            img={Khop}
                            titleReview='KHỚP'
                            textReview='THOÁI HÓA'
                        />
                    </View>

                    <Text style={styles.text}>{resultData.textSequel}</Text>

                    {result === 'normal'
                        ? <Image source={Milk} style={styles.milk} />
                        : <Image source={MilkYellow} style={styles.milk} />}

                    <View style={{ paddingHorizontal: 70 }}>
                        <TextNote
                            text='*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71'
                            size={7}
                            marginTop={-10}
                        />
                        <TextNote
                            text='**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones'
                            size={7}
                            marginTop={-5}
                            marginBottom={0}
                        />
                    </View>

                    <TextTitle
                        text='LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ'
                        result={result}
                        fontSize={12}
                    />

                </View>

                <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={styles.text}>{resultData.anleteText}</Text>
                    {seeMore ? (
                        <Animatable.View animation="slideInUp" duration={500}>
                            <TextNote
                                size={10}
                                text='*Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.'
                            />
                        </Animatable.View>
                    ) : (
                        <TouchableOpacity onPress={() => setSeeMore(true)}>
                            <Text style={[styles.seeMore, { color: result === 'normal' ? '#187B33' : '#ECD24A' }]}>
                                Xem thêm
                            </Text>
                        </TouchableOpacity>
                    )}
                    <ButtonCheck
                        width={200}
                        height={60}
                        fontSize={18}
                        text='MUA NGAY'
                        borderColor='#ECD24A'
                        onPress={() => navigation.navigate('LinkProduct')}
                    />
                </View>

            </ScrollView>
        </BackgroundColor>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 18,
        fontWeight: '600',
        marginVertical: 2,
    },

    threeimg: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    milk: {
        flex: 1,
        width: 400,
        height: 300,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginRight: 20,
    },
    seeMore: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },

});
