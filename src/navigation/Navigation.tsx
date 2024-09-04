import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Welcome from '../screens/welcome/Welcome';
import TestStep1 from '../screens/test/TestStep1';
import TestStep2 from '../screens/test/TestStep2';
import TestStep3 from '../screens/test/TestStep3';
import TestStep4 from '../screens/test/TestStep4';
import SubmitFrame from '../screens/submit/SubmitFrame';

// Định nghĩa kiểu dữ liệu cho danh sách các route
export type RootStackParamList = {
    Welcome: undefined;
    TestStep1: undefined;
    TestStep2: undefined;
    TestStep3: undefined;
    TestStep4: undefined;
    SubmitFrame: undefined;
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
                <Stack.Screen name="TestStep1" component={TestStep1} />
                <Stack.Screen name="TestStep2" component={TestStep2} />
                <Stack.Screen name="TestStep3" component={TestStep3} />
                <Stack.Screen name="TestStep4" component={TestStep4} />
                <Stack.Screen name="SubmitFrame" component={SubmitFrame} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
