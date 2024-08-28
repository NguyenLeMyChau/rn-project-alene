import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';
import Logo from './src/components/logo/Logo';
import Welcome from './src/screens/welcome/Welcome';
import TextTitle from './src/components/text/TextTitle';
import ButtonCheck from './src/components/button/ButtonCheck';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});