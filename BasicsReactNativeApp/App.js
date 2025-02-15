import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './src/components/Item';
import ImageComponent from './src/components/Image';

const deleteFunc = (id) => {
  console.log('delete'+id);
};

export default function App() {
  return (
    <View style={styles.container}>
      <Item text="hello" onClick={deleteFunc} />
      <ImageComponent 
        source={{ uri: 'https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man.webp' }}
        style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
