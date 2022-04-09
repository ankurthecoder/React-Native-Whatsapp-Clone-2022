import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View,Text, Pressable, TouchableOpacity } from 'react-native';
import ChatHomeHeader from '../components/ChatHomeHeader';
import ChatHome from '../Screens/ChatHome/ChatHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatStatus from '../Screens/ChatStatus/ChatStatus';
import ChatCalls from '../Screens/ChatCalls/ChatCalls';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigators = ()=> {
  
  return (
      <>
    <ChatHomeHeader />
    <Tab.Navigator initialRouteName='Chats'
     screenOptions={{
        tabBarLabelStyle: { fontSize: 20,fontWeight:'800' },
        tabBarStyle: { backgroundColor: '#1F2C34' },
        tabBarActiveTintColor:'#0FA081',
        tabBarInactiveTintColor:'#8A9BA5',
        tabBarIndicatorStyle:{borderBottomColor:'#0FA081',borderBottomWidth:5}
      }}
    >
    <Tab.Screen name="Chats" component={ChatHome} />
    <Tab.Screen name="Status" component={ChatStatus} />
    <Tab.Screen name="Calls" component={ChatCalls} />
  </Tab.Navigator>

      
  </>
  );
}

export default TopTabNavigators;
