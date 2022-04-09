 

import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button,
  View,
  FlatList,
} from 'react-native';
import Routes from "./Navigations/Routes";
 

const App = ()=> {
  return (
    <View style={{ flex: 1 }}>
    <Routes />
  </View>
  );
}

export default App;
