import React, { useContext, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Alert, BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header/Header';
import TextTitle from '../../components/text/TextTitle';
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonCheck from '../../components/button/ButtonCheck';
import TextNote from '../../components/text/TextNote';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import StepContext from '../../hook/StepProvider';
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import Popup from '../../components/popup/Popup';
import TestStep from '../../screens/test/steps/TestStep';

type TestFrameProp = {
    title: string,
    img: string | any,
    isVideo?: boolean,
    textImg: string,
    textYes: string,
    textNo: string,
}

export default function TestFrame({ title, img, isVideo = true, textImg, textYes, textNo }: TestFrameProp) {
    const [selected, setSelected] = useState<number | null>(null);
    const navigation = useNavigation<NavigationProp<any>>();
    const [isOpenPopup, setOpenPopup] = useState(false);
    const [sizeIcon, setSizeIcon] = useState({ yes: 35, no: 35 });
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const context = useContext(StepContext);
    if (!context) {
        throw new Error('StepContext must be used within a StepProvider');
    }
    const { steps, updateSteps, currentStep } = context;

    // kiểm tra xem tất cả các bước đã được chọn chưa
    const allStepsSelected = steps.every(step => step !== null);

    useEffect(() => {
        if (steps[currentStep] === true) {
            setSelected(1);
        } else if (steps[currentStep] === false) {
            setSelected(0);
        } else {
            setSelected(null);
        }
    }, [steps, currentStep]);

    // dùng để chuyển sang bước tiếp theo
    const handleYesClick = () => {
        setSelected(1);
        setSizeIcon({ yes: 45, no: 35 });
        updateSteps(true);
    };

    const handleNoClick = () => {
        setSelected(0);
        setSizeIcon({ yes: 35, no: 45 });
        updateSteps(false);
    };


    const handleClosePopup = () => {
        setOpenPopup(false); // Hide modal
    };

    return (
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            locations={[0, 0.4, 0.724, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Header currentPage={2} />

            <Text style={styles.title}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>

            <TestStep />

            <TextTitle text={title} fontSize={18} height={35} />

            <View style={[styles.viewImage,
            selected === 1 && styles.viewImageClickYes,
            selected === 0 && styles.viewImageClickNo]}>
                {isLoading && <ActivityIndicator size="large" color="#C4C4C4" style={styles.imgTest} />}
                {isVideo ? (
                    <Video
                        source={{ uri: img }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        shouldPlay={true} // auto play
                        isLooping={true} // loop
                        resizeMode={ResizeMode.COVER}
                        style={styles.imgTest}
                        useNativeControls={true} // show control
                        onLoad={handleLoad}
                    />
                ) : (
                    <Image source={{ uri: img }} style={styles.imgTest} onLoad={handleLoad} />
                )}

                {selected === 1 && (
                    <AntDesign name="checkcircle" size={50} color="#73A442" style={styles.iconImg} />
                )}
                {selected === 0 && (
                    <AntDesign name="closecircle" size={50} color="#C6463A" style={styles.iconImg} />
                )}
            </View>

            <Text style={styles.text}>{textImg}</Text>

            <View style={styles.containerButton}>

                <TouchableOpacity
                    style={[styles.button, selected === 1 && styles.buttonSelected]}
                    onPress={handleYesClick}
                >
                    <View style={styles.buttonIcon}>
                        <AntDesign name="smile-circle" size={sizeIcon.yes} color="#478449" />
                    </View>
                    <Text style={styles.textButton}>{textYes}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selected === 0 && styles.buttonSelected]}
                    onPress={handleNoClick}
                >
                    <View style={styles.buttonIcon}>
                        <AntDesign name="frown" size={sizeIcon.no} color="#E23F30" />
                    </View>
                    <Text style={styles.textButton}>{textNo}</Text>
                </TouchableOpacity>

            </View>

            <ButtonCheck
                text='XÁC NHẬN'
                borderColor={allStepsSelected ? '#B70002' : '#B8B8B8'}
                backgroundColor={allStepsSelected ? '#B70002' : '#B8B8B8'}
                disabled={allStepsSelected ? false : true}
                onPress={() => setOpenPopup(true)}
            />

            <TextNote text={'*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái.\n Đảm bảo vị trí tập an toàn để không té ngã.'} />

            <Popup
                visible={isOpenPopup}
                title="CẢM ƠN"
                textbody="Bạn đã tham gia bài kiểm tra sức khoẻ. Hãy tiếp tục để có thể nhận kết quả kiểm tra sức khoẻ của bạn."
                buttonTextYes="TIẾP TỤC"
                onClose={handleClosePopup}
                onPressYes={() => navigation.navigate('SubmitFrame')}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '700'
    },

    viewImage: {
        width: 330,
        height: 317,
    },

    viewImageClickYes: {
        borderColor: '#73A442',
        borderWidth: 3,
        elevation: 15,
        borderRadius: 15
    },

    viewImageClickNo: {
        borderColor: '#C6463A',
        borderWidth: 3,
        elevation: 15,
        borderRadius: 15
    },

    imgTest: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },

    iconImg: {
        position: 'absolute',
        top: -15,
        right: -15,
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 15,
    },

    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
        lineHeight: 21,
        paddingHorizontal: 60
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 5,
        marginBottom: 10
    },

    button: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#71A162',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    buttonSelected: {
        borderWidth: 1.5,
        borderColor: '#ECD24A'
    },

    textButton: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
        marginTop: 10,
        lineHeight: 16
    },

    buttonIcon: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    }
});