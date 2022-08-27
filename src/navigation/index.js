import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuistionScreen from '../pages/quistionScreen';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Question" component={QuistionScreen} />
    </Stack.Navigator>
  );
};

export default index;
