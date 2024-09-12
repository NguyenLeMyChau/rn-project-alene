import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Welcome from '../screens/welcome/Welcome';
import Submit from '../screens/submit/Submit';
import Test from '../screens/test/Test';
import Review from '../screens/review/Review';
import LinkProduct from '../screens/linkProduct/LinkProduct';
import InformationProduct from '../screens/informationProduct/InformationProduct';

// Định nghĩa kiểu dữ liệu cho danh sách các route
export type RootStackParamList = {
    Welcome: undefined;
    Submit: undefined;
    Test: undefined;
    Review: undefined;
    LinkProduct: undefined;
    InformationProduct: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
    headerShown: false
};

const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={screenOptions}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Submit" component={Submit} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="LinkProduct" component={LinkProduct} />
            <Stack.Screen name="InformationProduct" component={InformationProduct} />
        </Stack.Navigator>
    );
};

export default Navigation;
