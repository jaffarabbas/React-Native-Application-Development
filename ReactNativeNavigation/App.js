import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsDetail from './screens/MealsDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories' screenOptions={{
          headerStyle:{
            backgroundColor:'#333',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          contentStyle:{
            backgroundColor:'#333',
          }
        }}>
          <Stack.Screen name="Categories" component={CategoriesScreen} options={{
            title:'Meal Categories'
          }} />
          <Stack.Screen options={{
            title:'Meal Details'
          }}  name="MealsDetial" component={MealsDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
