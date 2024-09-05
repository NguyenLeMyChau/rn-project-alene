import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { Alert, BackHandler } from 'react-native';

type StepContextType = {
    steps: (boolean | null)[];
    setSteps: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    resetSteps: () => void;
    goBackStep: () => void;
    goNextStep: (value: boolean) => void;
    updateSteps: (stopTimeout: boolean, valueStep: boolean) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

type StepProviderProps = {
    children: ReactNode;
};

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const [steps, setSteps] = useState<(boolean | null)[]>([null, null, null, null]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const navigation = useNavigation<NavigationProp<any>>();

    const resetSteps = () => {
        setSteps([null, null, null, null]);
        setCurrentStep(0);
    };

    const goBackStep = () => {
        setSteps(prevSteps => {
            const updatedSteps = [...prevSteps]; // tạo mảng mới từ mảng cũ
            // Kiểm tra nếu hiện tại đang ở bước cuối cùng 
            //và bước đó đã được hoàn thành (not null)
            if (currentStep === steps.length - 1 && updatedSteps[currentStep] !== null) {
                updatedSteps[currentStep] = null; // set bước cuối cùng về null
            } else if (currentStep > 0) { // nếu không phải bước cuối cùng
                updatedSteps[currentStep - 1] = null; // set bước trước đó về null
                setCurrentStep(prevStep => prevStep - 1); // giảm bước hiện tại đi 1
            }
            return updatedSteps;
        });
    };

    const goNextStep = (value: boolean) => {
        setSteps(prevSteps => {
            const updatedSteps = [...prevSteps];
            updatedSteps[currentStep] = value; // set giá trị cho bước hiện tại
            return updatedSteps; // trả về mảng mới
        });
        if (currentStep < steps.length - 1) { // nếu chưa phải bước cuối cùng
            setCurrentStep(prevStep => prevStep + 1); // tăng bước hiện tại lên 1
        }
    };

    // cập nhật bước kiểm tra và chuyển sang bước tiếp theo sau 1s
    const updateSteps = (stopTimeout: boolean, valueStep: boolean) => {
        if (!stopTimeout) {
            setTimeout(() => {
                goNextStep(valueStep);
            }, 1000);
        } else {
            goNextStep(valueStep);
        }
    };

    useEffect(() => {
        console.log(steps);
        console.log(currentStep);
    }, [steps]);


    // kiểm tra xem đã chọn đúng bước kiểm tra chưa 
    useEffect(() => {
        const backAction = () => {
            if (currentStep > 0) {
                goBackStep();
                return true;
            } else {
                Alert.alert("Hold on!", "Bạn muốn huỷ kết quả test này?", [
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

    return (
        <StepContext.Provider value={{ steps, setSteps, currentStep, setCurrentStep, resetSteps, updateSteps, goBackStep, goNextStep }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepContext;