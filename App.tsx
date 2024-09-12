import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/hook/UserProvider';
import { StepProvider } from './src/hook/StepProvider';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StepProvider>
          <UserProvider>
            <Navigation />
          </UserProvider>
        </StepProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});