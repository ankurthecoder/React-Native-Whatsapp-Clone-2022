import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Constants/Colors';

const ChatListView = props => {
  console.log(props);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.userImgContainer}>
        <Image
          style={styles.userImg}
          source={{uri: props.data.imgUrl}}
        />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoTitle}>{props.data.name}</Text>
        <View style={styles.subTxtContainer}>
          {
            (props.data.msgInfo.isMsgDelivered)?<Ionicons
            name="checkmark-done-outline"
            style={styles.userInfoUnreadIcon}
          />:(props.data.msgInfo.isMsgRead)?
          <Ionicons
            name="checkmark-done-outline"
            style={styles.userInfoReadIcon}
          />:
          <Ionicons
          name="checkmark"
          style={styles.userInfoPendingIcon}
        />
          }
          
        
          {
       
           (props.data.msgInfo.lastMsgType=='photo')?
           <>
           <FontAwesome name="photo" style={styles.userInfoPhotoIcon} />
           <Text style={styles.userInfoTxt}>Photo</Text>
           </>:
           <Text style={styles.userInfoTxt}>{props.data.msgInfo.lastMsgTxt}</Text>
          }
       
        </View>
      </View>
      <View style={styles.timeInfoContainer}>
        <Text style={(props.data.msgInfo.unReadMsgCount>0)?styles.timeTxtHighlight:styles.timeTxtPlain}>{props.data.msgInfo.lastMsgTime}</Text>
       
          {
          (props.data.msgInfo.unReadMsgCount>0)?
          <View style={styles.countContainer}>
          <Text style={styles.countTxt}>{props.data.msgInfo.unReadMsgCount}</Text>
          </View>:
          null
        }
       
       
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.chatListBackground,
    // backgroundColor: 'yellow',
    padding: 10,
  },
  userImgContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  userImg: {
    width: 60,
    height:60,
    borderRadius: 60 / 2,
  },
  userInfoContainer: {
    flex: 3,
    marginHorizontal: 10,
    // backgroundColor: 'tomato',
    justifyContent: 'center',
  },
  userInfoTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTxtContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'green'
  },
  userInfoUnreadIcon: {
    color:  Colors.lightGray,
    fontSize: 20,
  },
  userInfoReadIcon:{
    color:  Colors.msgDelivered,
    fontSize: 20,
  },
  userInfoPendingIcon:{
    color: Colors.lightGray,
    fontSize: 20,
  },
  userInfoPhotoIcon: {
    color:  Colors.lightGray,
    marginLeft: 5,
    fontSize: 20,
  },
  userInfoTxt: {
    color: '#8C959A',
    fontSize: 19,
    marginLeft: 10,
  },
  timeInfoContainer: {
    flex: 0.5,
    // backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center'
  },
  timeTxtHighlight:{
    fontSize:16,
    color:  Colors.greenHighlight,
    fontWeight:'600'
  },
  timeTxtPlain:{
    fontSize:16,
    color:  Colors.lightGray,
    fontWeight:'600'
  },
  countContainer:{
    width:22,
    height:22,
    marginTop:8,
    borderRadius:22/2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:  Colors.greenHighlight,
  },
  countTxt:{
    fontSize:14,
    color:'#000',
    fontWeight:'800'
  }
});

export default ChatListView;
