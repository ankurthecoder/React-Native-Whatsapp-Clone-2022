import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text, StatusBar} from 'react-native';
import ChaltList from '../Screens/ChatList/ChatLIst';
import ChatHeader from '../components/ChatHeader';
import TopTabNavigators from './TopTabNavigators'; 

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <StatusBar backgroundColor="#1F2C34" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={TopTabNavigators} />
         
          <Stack.Screen
            name="ChatList"
            component={ChaltList}
            options={{
              headerStyle: {
                backgroundColor: '#1F2C34',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShown: false,
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
