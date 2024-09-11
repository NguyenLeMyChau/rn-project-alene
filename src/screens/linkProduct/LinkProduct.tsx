import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/header/Header';
import TextTitle from '../../components/text/TextTitle';
import Logo from '../../components/logo/Logo';
import Page3 from '../../../assets/page3.png';
import LogoLazada from '../../../assets/logo-lazada-removebg.png';
import ButtonCheck from '../../components/button/ButtonCheck';
import TextNote from '../../components/text/TextNote';

export default function LinkProduct() {
    return (
        <View style={styles.container}>
            {/* Hình nền nằm riêng trong một View khác */}
            <ImageBackground source={Page3} style={styles.backgroundImage} />

            {/* Nội dung chính */}
            <View style={styles.content}>
                <LinearGradient
                    colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
                    locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.containerHeader}
                >
                    <Header currentPage={5} />
                    <Logo width={120} height={100} />
                    <TextTitle text={"CHĂM SÓC CƠ-XƯƠNG-KHỚP"} fontSize={20} height={30} />
                    <TextTitle text={"NHẬN LỘC SỨC KHỎE TỪ ANLENE"} fontSize={16} height={40} marginTop={-5} />
                    <Text style={styles.text}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
                    <Text style={styles.text}>Hạn sử dụng: 25/07/2021 - 31/07/2021</Text>
                </LinearGradient>

                <View style={styles.footer}>
                    <LinearGradient
                        colors={['rgba(46, 130, 13, 0)', 'rgba(39, 117, 13, 0.7)', 'rgba(35, 110, 13, 0.85)', 'rgba(32, 104, 13, 0.9)', '#1F660D', '#0E470E']}
                        locations={[0, 0.086, 0.133, 0.177, 0.282, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.containerFooter}
                    >
                        <View style={styles.lazada}>
                            <View style={styles.lazadaTop}>
                                <Text style={{ fontSize: 10, color: '#73A442', fontWeight: 700 }}>MÃ GIẢM GIÁ</Text>
                                <Text style={{ fontSize: 15, color: '#478449', fontWeight: 700 }}>ANLENANMUMW88YQI</Text>
                            </View>
                            <View style={styles.lazadaBottom}>
                                <Text style={{ fontSize: 14, color: '#ECD24A', fontWeight: 700, marginRight: 15 }}>ÁP DỤNG TẠI</Text>
                                <Image source={LogoLazada} style={styles.imgLazada} />
                                <Text style={{ fontSize: 14, color: 'white', fontWeight: 700 }}>Lazada</Text>
                            </View>
                        </View>

                        <ButtonCheck
                            text='MUA NGAY'
                            fontSize={16}
                            width={200}
                            height={45}
                        />
                        <ButtonCheck
                            text='Tìm hiểu ngay'
                            fontSize={16}
                            backgroundColor='#FFFFFF'
                            borderColor='#73A442'
                            color='#73A442'
                            width={200}
                            height={43}
                        />
                        <View style={{paddingHorizontal: 10}}>
                            <TextNote
                                text='* Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada'
                            />
                            <TextNote
                                text='* Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ'
                            />
                        </View>

                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    // Điều chỉnh vị trí của hình nền, nhưng không ảnh hưởng đến phần tử con
    backgroundImage: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        top: 150, // Điều chỉnh top/marginTop của chỉ riêng hình nền
    },
    // Nội dung sẽ không bị ảnh hưởng bởi thay đổi margin của hình nền
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between', // Đảm bảo header ở trên và footer ở dưới
    },
    containerHeader: {
        alignItems: 'center',
        paddingBottom: 25,
    },
    text: {
        color: 'white',
        fontSize: 11,
        textAlign: 'center',
        paddingHorizontal: 20,
        alignSelf: 'flex-start',
        fontWeight: '700'
    },
    footer: {
        width: '100%',
        height: '30%',
    },
    containerFooter: {
        flex: 1,
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 16,
    },
    lazada: {
        width: 280,
        height: 100,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
    },
    lazadaTop: {
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lazadaBottom: {
        width: '100%',
        height: '45%',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLazada: {
        width: 40,
        height: 40,
        marginRight: 8
    },
});
