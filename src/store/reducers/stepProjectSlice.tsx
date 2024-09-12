import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

interface stepProjectState {
    steps: any[];
    currentStepProject: number;
    stepData: any[];
    assessmenData: any[];
    result: string;
}

const initialState: stepProjectState = {
    steps: [],
    currentStepProject: 0,
    stepData: [],
    assessmenData: [],
    result: ''
};
