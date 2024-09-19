// context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addUser, checkPhoneExist } from '../store/reducers/userSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface UserContextProps {
    user: {
        fullName: string;
        phone: string;
        email: string;
        checked: boolean;
    };
    setUser: React.Dispatch<React.SetStateAction<{
        fullName: string;
        phone: string;
        email: string;
        checked: boolean;
    }>>;
    handleSubmit: () => Promise<void>;
    full: boolean;
    resetUserProvider: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const dispatch = useDispatch<AppDispatch>();
    const [full, setFull] = useState(false);

    const [user, setUser] = useState({
        fullName: '',
        phone: '',
        email: '',
        checked: false,
    });

    useEffect(() => {
        if (user.fullName && user.phone) {
            setFull(true);
        } else {
            setFull(false);
        }
    }, [user.fullName, user.phone]);

    const resetUserProvider = () => {
        setUser({
            fullName: '',
            phone: '',
            email: '',
            checked: false,
        });
    };

    const handleSubmit = async () => {
        try {
            const phoneExists = await dispatch(checkPhoneExist(user.phone)).unwrap();
            if (phoneExists) {
                alert('Số điện thoại đã tồn tại!');
                return;
            }

            await dispatch(addUser(user)).unwrap();
            alert('Người dùng đã được thêm thành công!');
            navigation.navigate('Review');
            resetUserProvider();
        } catch (error) {
            console.error('Lỗi khi thêm người dùng:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại.');
        }
    };



    return (
        <UserContext.Provider value={{ user, setUser, handleSubmit, full, resetUserProvider }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
