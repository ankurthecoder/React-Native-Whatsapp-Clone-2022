import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Constants/Colors';

const ChatCallsView = props => {
  //   const navigation = useNavigation();
  //   const onPress = () => {
  //     navigation.goBack();
  //   };

  return (
    <View style={styles.itemContainer}>
      <View style={{flex: 0}}>
        <Image style={styles.userImgBorder} source={{uri: props.data.imgUrl}} />
        {/* <Ionicons name="ios-add-circle-sharp" size={20} style={styles.addStatusIcon} /> */}
      </View>
      <View style={styles.usrInfoContainer}>
        <Text style={styles.userName}>{props.data.name}</Text>
        <View style={styles.callDetailsInfoContainer}>
          {props.data.callConnectType == 'missed' ? (
            <MaterialIcons
              name="call-missed"
              style={styles.callDetailsInfoMissedIcon}
            />
          ) : props.data.callConnectType == 'received' ? (
            <MaterialIcons
              name="call-received"
              style={styles.callDetailsInfoReceivedIcon}
            />
          ) : (
            <MaterialIcons
              name="call-made"
              style={styles.callDetailsInfoReceivedIcon}
            />
          )}

          <Text style={styles.callDetailsInfoTxt}>{props.data.callInfo}</Text>
        </View>
      </View>
      <View style={styles.callIconContainer}>
        {/* <MaterialIcons name="call" style={styles.callIcon} /> */}
        {props.data.callType == 'audio' ? (
          <MaterialIcons name="call" style={styles.callIcon} />
        ) : (
          <Ionicons name="ios-videocam" style={styles.callIcon} />
        )}
      </View>
    </View>
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
    flex: 6,
    marginHorizontal: 20,
    justifyContent: 'center',
    // backgroundColor:'yellow'
  },
  userImgBorder: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
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
  recentUpdatesContainer: {
    // backgroundColor:'yellow',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  recentUpdatesTxt: {
    color: Colors.lightGray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  callDetailsInfoContainer: {
    flex: 1,
    //   backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  callIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callIcon: {
    fontSize: 32,
    color: Colors.greenHighlight,
  },
  callDetailsInfoReceivedIcon: {
    color: Colors.pureWhite,
    fontSize: 22,
    fontWeight: 'bold',
  },
  callDetailsInfoMissedIcon: {
    color: '#E85164',
    fontSize: 22,
    fontWeight: 'bold',
  },
  callDetailsInfoMadeIcon: {
    color: Colors.pureWhite,
    fontSize: 22,
    fontWeight: 'bold',
  },
  callDetailsInfoTxt: {
    color: Colors.lightGray,
    fontSize: 19,
    marginHorizontal: 5,
  },
});

export default ChatCallsView;
