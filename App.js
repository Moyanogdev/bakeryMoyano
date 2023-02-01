import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require('./src/assets/fonts/Unbounded-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return <ShopNavigator />
}
