import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/header/Header';
import TextTitle from '../../components/text/TextTitle';
import Page1 from '../../../assets/page1.png';
import ButtonCheck from '../../components/button/ButtonCheck';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Navigation';
import WelcomeFrame from '../../components/frame/WelcomeFrame';
import TextNote from '../../components/text/TextNote';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { resetSteps } from '../../store/reducers/stepSlice';

export default function Welcome() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={styles.container}>

            <ImageBackground source={Page1} style={styles.backgroundImage} >
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
                        locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.containerHeader}
                    >
                        <Header currentPage={1} />

                        <TextTitle text={"TẾT BẬN RỘN \nCƠ-XƯƠNG-KHỚP CÓ KHOẺ \nĐỂ CHU TOÀN?"} height={100} />

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={styles.text}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?</Text>
                            <Text style={styles.text}>Ngay lúc này, hãy <Text style={{ color: '#E1D770' }}>Kiểm tra Sức khoẻ Cơ-Xương-Khớp</Text> cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, {'\n'} trọn vẹn niềm vui.</Text>
                        </View>
                    </LinearGradient>
                </View>

                <View style={styles.buttonCheck}>
                    <ButtonCheck text='KIỂM TRA NGAY' fontSize={20} borderColor='#E1D770' onPress={async () => { dispatch(resetSteps()), navigation.navigate('Test') }} />
                </View>


            </ImageBackground>

            <View style={styles.footer}>

                <LinearGradient
                    colors={['rgba(46, 130, 13, 0)', 'rgba(39, 117, 13, 0.7)', 'rgba(35, 110, 13, 0.85)', 'rgba(32, 104, 13, 0.9)', '#1F660D', '#0E470E']}
                    locations={[0, 0.086, 0.133, 0.177, 0.282, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.containerFooter}
                >
                    <View style={styles.footerContainer}>
                        <WelcomeFrame text={'MIỄN\nPHÍ'} />
                        <WelcomeFrame text={'CHỈ \n5 PHÚT'} />
                        <WelcomeFrame text={'Voucher\n100K'} />
                    </View>

                    <TextNote text={'Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene'} />
                    <View style={{ paddingHorizontal: 40 }}>
                        <TextNote text={'Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường'} />

                    </View>
                </LinearGradient>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        marginBottom: 150,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        color: 'white'
    },

    header: {
        width: '100%',
        height: '42%',
    },

    containerHeader: {
        flex: 1,
        alignItems: 'center',
        color: 'white'
    },

    text: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },

    footer: {
        width: '100%',
        height: '20%',
        position: 'absolute',
        bottom: 0,
    },

    containerFooter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerText: {
        color: 'white',
        fontSize: 16,
    },

    buttonCheck: {
        position: 'absolute',
        bottom: 15,
    },

    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    }
});