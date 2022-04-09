import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
const MenuSelector = props => {
   
  return (
   
      <View style={[styles.container, props.style]}>
        <View style={styles.menuItem}>
          <Text style={styles.menuTxt}>New Group</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuTxt}>New broadcast</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuTxt}>Linked devices</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuTxt}>Payments</Text>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 10,
    width: '45%',
    right: 10,
    height: '30%',
    elevation: 6,
    backgroundColor: Colors.chatListBackground,
    zIndex:999
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  menuTxt: {
    color: Colors.pureWhite,
    fontWeight: '400',
    fontSize: 18,
  },
});

export default MenuSelector;
