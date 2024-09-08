import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './reducers/stepSlice';

export const store = configureStore({
    reducer: {
        steps: stepReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
