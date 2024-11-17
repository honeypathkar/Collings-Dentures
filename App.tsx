import React from 'react';
import DetailScreen from './src/screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import LoginScreen from './src/screens/LoginScreen'; // Import LoginScreen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* LoginScreen is the initial screen */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{animation: 'fade'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{animation: 'ios_from_right'}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{animation: 'ios_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
