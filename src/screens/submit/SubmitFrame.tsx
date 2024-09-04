import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../components/logo/Logo';
import TextTitle from '../../components/text/TextTitle';
import InputFrame from '../../components/input/InputFrame';
import Checkbox from 'expo-checkbox';
import TextNote from '../../components/text/TextNote';
import ButtonCheck from '../../components/button/ButtonCheck';

export default function SubmitFrame() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setChecked] = useState(false);

    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            locations={[0, 0.4, 0.724, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Header currentPage={3} />

            <View style={{ bottom: 25, marginBottom: -60 }}>
                <Logo width={120} height={100} />
            </View>

            <View style={{ paddingHorizontal: 30 }}>
                <TextTitle text='HOÀN THÀNH BÀI KIỂM TRA' fontSize={13} only={true} />
                <TextTitle text='XIN CHÚC MỪNG!' fontSize={26} height={30} only={true} />

                <Text style={styles.text}>Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt.</Text>

                <Text style={styles.textInput}>Điền thông tin bên dưới để xem đầy đủ
                    kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                <InputFrame
                    label='Họ tên'
                    placeholder='Nhập họ và tên'
                    value={name}
                    onChangeText={setName}
                    isObligatory={true}
                />

                <InputFrame
                    label='Số điện thoại'
                    placeholder='Nhập số điện thoại'
                    value={phone}
                    onChangeText={setPhone}
                    isObligatory={true}
                />

                <InputFrame
                    label='Email'
                    placeholder='Nhập email'
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={styles.section}>

                    <View style={[styles.checkboxContainer, isChecked ? styles.checked : styles.unchecked]}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#B70002' : 'white'}
                        />
                    </View>

                    <Text style={styles.paragraph}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ{'\n'} chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
                </View>

                <Text style={styles.textConfirm}>Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông{'\n'} tin của mình để xử lý dựa trên chính sách bảo mật của Anlene</Text>

                <View style={{ width: '60%', alignSelf: 'center', marginTop: 50 }}>
                    <ButtonCheck
                        text='HOÀN THÀNH'
                        borderColor='#B8B8B8'
                        backgroundColor='#B8B8B8'
                        disabled={true}
                    />
                </View>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 18,
        fontWeight: '600',
        marginVertical: 10,
        paddingHorizontal: 20,
    },

    textInput: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: '600',
    },

    viewCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'justify',
    },

    checkboxContainer: {
        width: 25,
        height: 25,
        margin: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#ECD24A',
    },
    unchecked: {
        backgroundColor: 'white',
    },
    checkbox: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    textConfirm: {
        color: 'white',
        fontSize: 10,
        lineHeight: 16,
        textAlign: 'center',
        fontStyle: 'italic',
    }

});