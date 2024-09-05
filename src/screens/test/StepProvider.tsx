import React, { createContext, useState, ReactNode } from 'react';

type StepContextType = {
    steps: (boolean | null)[];
    setSteps: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    resetSteps: () => void;
    goBackStep: () => void;
    goNextStep: (value: boolean) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

type StepProviderProps = {
    children: ReactNode;
};

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const [steps, setSteps] = useState<(boolean | null)[]>([null, null, null, null]);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const resetSteps = () => {
        setSteps([null, null, null, null]);
        setCurrentStep(0);
    };

    const goBackStep = () => {
        setSteps(prevSteps => {
            const updatedSteps = [...prevSteps];
            if (currentStep === steps.length - 1 && updatedSteps[currentStep] !== null) {
                updatedSteps[currentStep] = null;
            } else if (currentStep > 0) {
                updatedSteps[currentStep - 1] = null;
                setCurrentStep(prevStep => prevStep - 1);
            }
            return updatedSteps;
        });
    };


    const goNextStep = (value: boolean) => {
        setSteps(prevSteps => {
            const updatedSteps = [...prevSteps];
            updatedSteps[currentStep] = value;
            return updatedSteps;
        });

        if (currentStep < steps.length - 1) {
            setCurrentStep(prevStep => prevStep + 1);
        }

        console.log('current', currentStep);
        console.log('steps', steps);

    };

    return (
        <StepContext.Provider value={{ steps, setSteps, currentStep, setCurrentStep, resetSteps, goBackStep, goNextStep }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepContext;