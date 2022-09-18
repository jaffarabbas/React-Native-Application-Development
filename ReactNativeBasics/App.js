import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomComponents from './src/screens/CustomComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jaffar here</Text>
      <CustomComponents/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontWeight: 'bold',
  }
});
