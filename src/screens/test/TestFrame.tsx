import React, { useContext, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header/Header';
import TestStep from './TestStep';
import TextTitle from '../../components/text/TextTitle';
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonCheck from '../../components/button/ButtonCheck';
import TextNote from '../../components/text/TextNote';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import StepContext from './StepProvider';
import { ResizeMode, Video } from 'expo-av';
import Popup from '../../components/popup/Popup';

type TestFrameProp = {
    title: string,
    img: any,
    isVideo?: boolean,
    textImg: string,
    textYes: string,
    textNo: string,
    nextStep?: string,
    stopTimeout?: boolean
}

export default function TestFrame({ title, img, isVideo = true, textImg, textYes, textNo, nextStep, stopTimeout = false }: TestFrameProp) {
    const [selected, setSelected] = useState<number | null>(null);
    const navigation = useNavigation<NavigationProp<any>>();
    const context = useContext(StepContext);
    const [isOpenPopup, setOpenPopup] = useState(false);

    if (!context) {
        throw new Error('StepContext must be used within a StepProvider');
    }

    const { steps, setSteps, currentStep, setCurrentStep, goBackStep } = context;

    // dùng để chuyển sang bước tiếp theo
    const handleYesClick = () => {
        setSelected(1);
        updateSteps(true);
    };

    const handleNoClick = () => {
        setSelected(0);
        updateSteps(false);
    };

    // cập nhật bước kiểm tra và chuyển sang bước tiếp theo sau 1s 
    const updateSteps = (value: boolean) => {
        if (!stopTimeout) {
            setTimeout(() => {
                const updatedSteps = [...steps];
                updatedSteps[currentStep] = value;
                setSteps(updatedSteps);
                setCurrentStep(currentStep + 1);
                if (nextStep) {
                    navigation.navigate(nextStep as never);
                }

            }, 1000);
        } else {
            const updatedSteps = [...steps];
            updatedSteps[currentStep] = value;
            setSteps(updatedSteps);
        }
    };

    // kiểm tra xem tất cả các bước đã được chọn chưa
    const allStepsSelected = steps.every(step => step !== null);

    // kiểm tra xem đã chọn đúng bước kiểm tra chưa 
    useEffect(() => {
        const backAction = () => {
            if (currentStep > 0) {
                const updatedSteps = [...steps];
                updatedSteps[currentStep] = null;
                setSteps(updatedSteps);

                goBackStep();
                navigation.goBack();
                return true;
            } else {
                Alert.alert("Hold on!", "Are you sure you want to go back?", [
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    },
                    { text: "YES", onPress: () => navigation.goBack() }
                ]);
                return true;
            }
        };

        // thêm sự kiện khi ấn nút back
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        // xóa sự kiện khi component bị hủy
        return () => backHandler.remove();
    }, [currentStep, goBackStep]);

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
                {isVideo ? (
                    <Video
                        source={img}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        shouldPlay
                        isLooping
                        resizeMode={ResizeMode.COVER}
                        style={styles.imgTest}
                    />
                ) : (
                    <Image source={img} style={styles.imgTest} />
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
                        <AntDesign name="smile-circle" size={35} color="#478449" />
                    </View>
                    <Text style={styles.textButton}>{textYes}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selected === 0 && styles.buttonSelected]}
                    onPress={handleNoClick}
                >
                    <View style={styles.buttonIcon}>
                        <AntDesign name="frown" size={35} color="#E23F30" />
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
        lineHeight: 21
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