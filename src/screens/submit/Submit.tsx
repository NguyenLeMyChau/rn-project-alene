import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/Logo';
import TextTitle from '../../components/text/TextTitle';
import InputFrame from '../../components/input/InputFrame';
import Checkbox from 'expo-checkbox';
import ButtonCheck from '../../components/button/ButtonCheck';
import BackgroundColor from '../../components/backgroundColor/BackgroundColor';
import StepContext from '../../hook/StepProvider';
import { dataResult } from '../../data/dataResult';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Submit() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setChecked] = useState(false);

    const { result } = useSelector((state: RootState) => state.steps);


    const resultData = dataResult.find(item => item.result === result) || { title: '', textBody: '' };

    return (
        <BackgroundColor stateStrength={result}>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Header currentPage={3} />

                    <Logo width={120} height={100} />

                    <View style={{ paddingHorizontal: 30 }}>
                        <TextTitle text='HOÀN THÀNH BÀI KIỂM TRA' fontSize={13} result={result} />
                        <TextTitle text={resultData.title} fontSize={24} height={34} result={result} />

                        <Text style={styles.text}>{resultData.textBody}</Text>

                        <Text style={styles.textInput}>Điền thông tin bên dưới để xem đầy đủ
                            kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        <InputFrame
                            label='Họ tên'
                            placeholder='Nhập họ và tên'
                            value={name}
                            onChangeText={setName}
                            isObligatory={true}
                            result={result}
                        />

                        <InputFrame
                            label='Số điện thoại'
                            placeholder='Nhập số điện thoại'
                            value={phone}
                            onChangeText={setPhone}
                            isObligatory={true}
                            result={result}
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

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                        <ButtonCheck
                            text='HOÀN THÀNH'
                            borderColor='#B8B8B8'
                            backgroundColor='#B8B8B8'
                            disabled={true}
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
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
        paddingHorizontal: 15,
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
