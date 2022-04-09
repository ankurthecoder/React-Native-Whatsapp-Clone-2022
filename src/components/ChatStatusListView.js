import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Constants/Colors';

const ChatStatusListView = props => {
  //   const navigation = useNavigation();
  //   const onPress = () => {
  //     navigation.goBack();
  //   };

  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.usrImgContainer}>
          <Image style={styles.userImg} source={{uri: props.imgUrl}} />
          <Ionicons name="ios-add-circle-sharp" size={20} style={styles.addStatusIcon} />
        </View>
        <View style={styles.usrInfoContainer}>
          <Text style={styles.userName}>My Status</Text>
          <Text style={styles.userStatus}>Tap to add status update</Text>
        </View>
      </View>

      <View style={styles.recentUpdatesContainer}>
          <Text style={styles.recentUpdatesTxt}>Recent updates</Text>
      </View>
      
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.userImgBorder} source={{uri: 'https://randomuser.me/api/portraits/women/20.jpg'}} />
          {/* <Ionicons name="ios-add-circle-sharp" size={20} style={styles.addStatusIcon} /> */}
        </View>
        <View style={styles.usrInfoContainer}>
          <Text style={styles.userName}>Ankur Gupta</Text>
          <Text style={styles.userStatus}>Today, 13:26</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.userImgBorder} source={{uri:'https://randomuser.me/api/portraits/women/21.jpg'}} />
          {/* <Ionicons name="ios-add-circle-sharp" size={20} style={styles.addStatusIcon} /> */}
        </View>
        <View style={styles.usrInfoContainer}>
          <Text style={styles.userName}>Ankur Gupta</Text>
          <Text style={styles.userStatus}>Today, 13:26</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.userImgBorder} source={{uri:'https://randomuser.me/api/portraits/women/22.jpg'}} />
          {/* <Ionicons name="ios-add-circle-sharp" size={20} style={styles.addStatusIcon} /> */}
        </View>
        <View style={styles.usrInfoContainer}>
          <Text style={styles.userName}>Ankur Gupta</Text>
          <Text style={styles.userStatus}>Today, 13:26</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  usrImgContainer: {},

  userImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  addStatusIcon: {
    fontSize: 30,
    color: Colors.greenHighlight,
    position: 'absolute',
    bottom: -5,
    right: -10,
  },
  usrInfoContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  userImgBorder:{
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth:3,
    borderColor:Colors.greenHighlight,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  userStatus: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.lightGray,
  },
  recentUpdatesContainer:{
    // backgroundColor:'yellow',
    paddingVertical:10,
    paddingHorizontal:15
  },
  recentUpdatesTxt:{
    color:Colors.lightGray,
    fontSize:18,
    fontWeight:'bold'

  }
});

export default ChatStatusListView;
