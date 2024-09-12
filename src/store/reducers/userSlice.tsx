import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { RootState } from "../store";

interface UserState {
    fullName: string;
    phone: string;
    email: string;
    checked: boolean;
}

const initialState: UserState = {
    fullName: '',
    phone: '',
    email: '',
    checked: false
};

// Async action để thêm người dùng vào Firebase
export const addUser = createAsyncThunk(
    'users/addUser',
    async (user: UserState, { getState }) => {
        const state = getState() as RootState;
        const { steps, result } = state.steps; // Truy cập vào steps và result từ StepSlice

        // Thêm người dùng vào Firestore
        await addDoc(collection(db, 'users'), {
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
            resultStep: steps,
            result: result,
            checked: user.checked
        });

        // Trả về dữ liệu người dùng để sử dụng trong fulfilled case
        return user;
    }
);

export const checkPhoneExist = createAsyncThunk(
    'users/checkPhoneExist',
    async (phone: string) => {
        const q = query(collection(db, 'users'), where('phone', '==', phone));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.fullName = '';
            state.phone = '';
            state.email = '';
            state.checked = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                // Xử lý trạng thái loading nếu cần
                console.log('Đang thêm người dùng...');
            })
            .addCase(addUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                // Cập nhật state với dữ liệu người dùng sau khi thành công
                state.fullName = action.payload.fullName;
                state.phone = action.payload.phone;
                state.email = action.payload.email;
                state.checked = action.payload.checked;
                console.log('Thêm người dùng thành công');
            })
            .addCase(addUser.rejected, (state, action) => {
                // Xử lý lỗi ở đây
                console.error('Thêm người dùng thất bại:', action.error.message);
            });
    },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
