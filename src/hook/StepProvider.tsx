import { NavigationProp, useNavigation } from '@react-navigation/native';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { Alert, BackHandler } from 'react-native';
import { db } from '../config/firebaseConfig';

type StepContextType = {
    steps: (boolean | null)[];
    setSteps: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    resetSteps: () => void;
    goBackStep: () => void;
    goNextStep: (value: boolean) => void;
    updateSteps: (valueStep: boolean) => void;
    data: any[];
};

const StepContext = createContext<StepContextType | undefined>(undefined);

type StepProviderProps = {
    children: ReactNode;
};

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const [steps, setSteps] = useState<(boolean | null)[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [data, setData] = useState<any[]>([]);
    const [assessmentData, setAssessmentData] = useState<any[]>([]);
    const [result, setResult] = useState<string | null>(null); // Thêm state để lưu kết quả

    const navigation = useNavigation<NavigationProp<any>>();

    // Subscribe to tasks: Xử lý realtime khi có sự thay đổi từ Firestore
    const subscribeToTasks = () => {
        const q = query(collection(db, 'test-steps'));
        return onSnapshot(q, (snapshot) => {
            const dataStep = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setData(dataStep);
            console.log(dataStep.length)
        });
    };

    const fetchAssessmentData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'assessment-table'));
            const data = querySnapshot.docs.map(doc => doc.data());
            setAssessmentData(data);
        } catch (error) {
            console.error('Error fetching assessment data:', error);
        }
    };


    useEffect(() => {
        subscribeToTasks();
        fetchAssessmentData();
    }, []);

    useEffect(() => {
        setSteps(Array(data.length).fill(null));
        console.log(data.length)
    }, [data]);

    // reset lại các bước kiểm tra
    const resetSteps = () => {
        setSteps(Array(data.length).fill(null));
        setCurrentStep(0);
        setResult(null);
    };

    // quay lại bước trước đó
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

    // chuyển sang bước tiếp theo
    const goNextStep = async (value: boolean) => {
        const updatedSteps = [...steps];
        updatedSteps[currentStep] = value; // set giá trị cho bước hiện tại
        setSteps(updatedSteps);

        if (currentStep !== steps.length - 1) {
            setCurrentStep(prevStep => prevStep + 1); // tăng bước hiện tại lên 1
        }


    };

    // Hàm so sánh các bước với dữ liệu trên Firebase
    const compareStepsWithFirebase = async (): Promise<string | null> => {
        for (const assessment of assessmentData) {
            if (JSON.stringify(assessment.steps) === JSON.stringify(steps)) {
                return assessment.result;
            }
        }
        return "No matching result";
    };

    // cập nhật bước kiểm tra và chuyển sang bước tiếp theo sau 1s
    const updateSteps = (valueStep: boolean) => {
        if (currentStep === steps.length - 1) {
            goNextStep(valueStep);
        } else {
            setTimeout(() => {
                goNextStep(valueStep);
            }, 1000);
        }
    };

    useEffect(() => {
        const checkResult = async () => {
            console.log(steps);
            console.log(currentStep);
            const updatedSteps = [...steps];

            if (currentStep === steps.length - 1 && updatedSteps[currentStep] !== null) {
                const result = await compareStepsWithFirebase();
                setResult(result);
                console.log(result);
            }
        };

        checkResult();
    }, [steps]);


    // kiểm tra xem đã chọn đúng bước kiểm tra chưa 
    useEffect(() => {
        const backAction = () => {
            if (currentStep > 0) {
                goBackStep();
                return true;
            } else {
                Alert.alert("Cảnh báo", "Bạn muốn huỷ kết quả test này?", [
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
        <StepContext.Provider value={{ steps, setSteps, currentStep, setCurrentStep, resetSteps, updateSteps, goBackStep, goNextStep, data }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepContext;