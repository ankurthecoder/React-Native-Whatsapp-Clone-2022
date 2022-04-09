import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';

const ChatHomeHeader = props => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Text style={styles.mainHeaderTitle}>WhatsApp</Text>
      </View>

      <View style={styles.rightHeader}>
        <View style={styles.rightHeaderIcons}>
          <Pressable android_ripple={{color: 'black', borderless: true}}>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={styles.searchIcon}
            />
          </Pressable>
          <Pressable android_ripple={{color: 'black', borderless: true}}>
            <Ionicons
              name="ellipsis-vertical"
              size={30}
              color="black"
              style={styles.menuIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 80,
    backgroundColor: Colors.headerBackground,
  },
  mainHeaderTitle: {
    color: Colors.lightGray,
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal:15
  },
  leftHeader: {
    flex: 1,
    //   backgroundColor:'green'
  },
  rightHeader: {
    flex: 1,
    // backgroundColor:'blue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerMainTitle: {
    fontSize: 22,
    fontWeight: 'bold',

    color: Colors.pureWhite
  },
   
  rightHeaderIcons: {
    flexDirection: 'row',
  },
  searchIcon: {
    marginRight: 20,
    color:Colors.lightGray
  },
  menuIcon: {
    color: Colors.lightGray
  },
});

export default ChatHomeHeader;
