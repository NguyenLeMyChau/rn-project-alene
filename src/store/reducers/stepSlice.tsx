import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

interface StepState {
    steps: any[];
    currentStep: number;
    stepData: any[];
    assessmenData: any[];
    result: string;
    dataResultArr: any[];
    dataResult: any | null;
}

const initialState: StepState = {
    steps: [],
    currentStep: 0,
    stepData: [],
    assessmenData: [],
    result: '',
    dataResultArr: [],
    dataResult: null
};

export const fetchAssessmentData = createAsyncThunk(
    'steps/fetchAssessmentData',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'assessment-table'));
        const assessmenData = querySnapshot.docs.map(doc => doc.data());
        return assessmenData;
    }
);

export const fetchStepData = createAsyncThunk(
    'steps/fetchStepData',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'test-steps'));
        const stepData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return stepData;
    }
);

export const fetchDataByResult = createAsyncThunk(
    'steps/fetchDataByResult',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'data-result'));
        const dataResult = querySnapshot.docs.map(doc => doc.data());
        return dataResult;
    }
);


const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        goBackStep(state) {
            state.currentStep = Math.max(state.currentStep - 1, 0);
        },
        goNextStep(state) {
            state.currentStep = Math.min(state.currentStep + 1, state.steps.length - 1);

        },
        updateStep(state, action: PayloadAction<{ index: number, value: boolean | null }>) {
            const { index, value } = action.payload;
            if (index >= 0 && index < state.steps.length) {
                state.steps[index] = value;
            }
        },
        resetSteps(state) {
            state.currentStep = 0;
            state.steps = Array(state.stepData.length).fill(null);
            state.result = '';
        },
        compareStepsWithFirebase(state) {
            for (const assessment of state.assessmenData) {
                if (JSON.stringify(assessment.steps) === JSON.stringify(state.steps)) {
                    state.result = assessment.result;
                    return;
                }
            }
            state.result = "No matching result";
        },
        compareResultWithFirebase(state) {
            for (const dataResult of state.dataResultArr) {
                if (JSON.stringify(dataResult.result) === JSON.stringify(state.result)) {
                    state.dataResult = dataResult;
                    console.log('dataResult: ', state.dataResult);
                    return;
                }
            }
            state.dataResult = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssessmentData.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.assessmenData = action.payload;
            })
            .addCase(fetchStepData.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.stepData = action.payload;
                state.steps = Array(action.payload.length).fill(null);
                console.log('steps', state.steps);
            })
            .addCase(fetchDataByResult.fulfilled, (state, action: PayloadAction<any[]>) => {
                // Lưu object được trả về từ Firebase vào state
                state.dataResultArr = action.payload;
            });
    }
});

export const { goBackStep, goNextStep, resetSteps, updateStep, compareStepsWithFirebase, compareResultWithFirebase } = stepSlice.actions;
export default stepSlice.reducer;