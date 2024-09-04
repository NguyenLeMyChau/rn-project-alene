import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './src/screens/test/TestFrame';
import Navigation from './src/navigation/Navigation';
import FrameWelcome from './src/components/frame/FrameWelcome';
import TestStep from './src/screens/test/TestStep';
import TestStep2 from './src/screens/test/TestStep2';
import TestStep3 from './src/screens/test/TestStep3';
import TestStep4 from './src/screens/test/TestStep4';
import { StepProvider } from './src/screens/test/StepProvider';
import Popup from './src/components/popup/Popup';
import SubmitFrame from './src/screens/submit/SubmitFrame';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StepProvider>
        <Navigation />
      </StepProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});