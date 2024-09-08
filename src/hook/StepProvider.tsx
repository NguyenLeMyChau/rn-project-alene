import React, { ReactNode, useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { compareStepsWithFirebase, fetchAssessmentData, fetchStepData, goBackStep, updateStep } from '../store/reducers/stepSlice';
import { RootState, AppDispatch } from '../store/store';

interface StepProviderProps {
    children: ReactNode;
}

const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const dispatch = useDispatch<AppDispatch>();
    const { currentStep, steps, result } = useSelector((state: RootState) => state.steps);

    // fetch dữ liệu bước kiểm tra và dữ liệu đánh giá từ firebase khi component được render lần đầu 
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchStepData()).unwrap();
                await dispatch(fetchAssessmentData()).unwrap();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    // kiểm tra kết quả bài test khi đã chọn hết các bước kiểm tra
    useEffect(() => {
        const checkResult = async () => {
            console.log(steps);
            console.log(currentStep);

            if (currentStep === steps.length - 1 && steps[currentStep] !== null) {
                dispatch(compareStepsWithFirebase());
                console.log(result);
            }
        };

        checkResult();
    }, [steps, dispatch]);

    // kiểm tra xem đã chọn đúng bước kiểm tra chưa
    useEffect(() => {
        const backAction = () => {
            if (currentStep > 0) {
                // Kiểm tra nếu hiện tại đang ở bước cuối cùng 
                //và bước đó đã được hoàn thành (not null) thì sẽ reset lại bước đó
                if (currentStep === steps.length - 1 && steps[currentStep] !== null) {
                    dispatch(updateStep({ index: currentStep, value: null }));
                } else {
                    dispatch(updateStep({ index: currentStep - 1, value: null }));
                    dispatch(goBackStep());
                }
                return true;
            } else {
                Alert.alert("Cảnh báo", "Bạn muốn huỷ kết quả bài test này?", [
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
    }, [currentStep, dispatch, steps]);

    return (
        <>
            {children}
        </>
    );
};

export default StepProvider;
