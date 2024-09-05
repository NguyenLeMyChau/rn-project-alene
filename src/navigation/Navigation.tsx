import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Welcome from '../screens/welcome/Welcome';
import SubmitFrame from '../screens/submit/SubmitFrame';
import Test from '../screens/test/Test';

// Định nghĩa kiểu dữ liệu cho danh sách các route
export type RootStackParamList = {
    Welcome: undefined;
    SubmitFrame: undefined;
    Test: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
    headerShown: false
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={screenOptions}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="SubmitFrame" component={SubmitFrame} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
