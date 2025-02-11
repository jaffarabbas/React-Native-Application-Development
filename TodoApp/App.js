import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider, Switch, Appbar } from 'react-native-paper';
import { lightTheme, darkTheme } from './utils/theme';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => (
              <Appbar.Header style={{ backgroundColor: isDarkMode ? '#121212' : '#6200ee' }}>
                <Appbar.Content title="To-Do App" titleStyle={{ color: '#fff' }} />
                <Switch value={isDarkMode} onValueChange={toggleTheme} color="#fff" />
              </Appbar.Header>
            ),
          }}
        >
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
