import React, { createContext, useState, ReactNode } from 'react';

type StepContextType = {
    steps: (boolean | null)[];
    setSteps: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    resetSteps: () => void;
    goBackStep: () => void;
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
        if (currentStep > 0) {
            setSteps(prevSteps => {
                const updatedSteps = [...prevSteps];
                updatedSteps[currentStep - 1] = null;
                return updatedSteps;
            });
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <StepContext.Provider value={{ steps, setSteps, currentStep, setCurrentStep, resetSteps, goBackStep }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepContext;
