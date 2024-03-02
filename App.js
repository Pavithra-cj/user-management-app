import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/routes/navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Navigation/>
  );
};

export default App;
