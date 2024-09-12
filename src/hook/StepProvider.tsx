import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { compareStepsWithFirebase, fetchAssessmentData, fetchStepData, goBackStep, goNextStep, updateStep } from '../store/reducers/stepSlice';
import { RootState, AppDispatch } from '../store/store';

interface StepProviderProps {
    children: ReactNode;
}

export const StepContext = React.createContext<any>(null);

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
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
    }, []);

    // // kiểm tra kết quả bài test khi đã chọn hết các bước kiểm tra
    useEffect(() => {
        console.log("Checking result...");
        console.log("Current step:", currentStep);
        console.log("Steps:", steps);
        const checkResult = async () => {
            if (currentStep === steps.length - 1 && steps[currentStep] !== null) {
                dispatch(compareStepsWithFirebase());
            }
        };

        checkResult();
    }, [steps, result, dispatch]);


    // dùng để chuyển sang bước tiếp theo
    const handleNextStep = (value: boolean) => {
        dispatch(updateStep({ index: currentStep, value }));

        if (currentStep < steps.length - 1) {
            setTimeout(() => {
                dispatch(goNextStep());
            }, 1000);
        } else {
            console.log("End of steps. Submitting or showing the result.");
        }
    };


    return (
        <StepContext.Provider value={{ handleNextStep }}>
            {children}
        </StepContext.Provider>
    );
};

export const useSteps = () => {
    const context = useContext(StepContext);
    if (!context) {
        throw new Error('useSteps must be used within a UserProvider');
    }
    return context;
};