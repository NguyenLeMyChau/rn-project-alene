import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './reducers/stepSlice';
import userReducer from './reducers/userSlice';
export const store = configureStore({
    reducer: {
        steps: stepReducer,
        users: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
