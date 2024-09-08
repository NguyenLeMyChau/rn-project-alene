

interface UserState {
    id: string;
    fullName: string;
    phone: string;
    email: string;
}

const initialState: UserState = {
    id: '',
    fullName: '',
    phone: '',
    email: ''
};