import React,{useState} from 'react';
import { StyleSheet, Text, View,Pressable,ScrollView, TouchableWithoutFeedback } from 'react-native';
import ChatStatusListView from '../../components/ChatStatusListView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Colors from '../../Constants/Colors';


const ChatStatus = ({navigation}) => {
   

  return (
    <>
      <Pressable style={{width:70,height:70,borderRadius:70/2,
               backgroundColor:'#233239',position:'absolute',
               bottom:140,right:18,fontWeight:'bold',justifyContent:'center',
               alignItems:'center',zIndex:10}}
              
               >
 
                 <MaterialCommunityIcons
               name="pencil"
               size={35}
               color="white"
             
             />
 
  </Pressable>

     <Pressable style={{width:80,height:80,borderRadius:80/2,
               backgroundColor:Colors.greenHighlight,position:'absolute',
               bottom:30,right:10,fontWeight:'bold',justifyContent:'center',
               alignItems:'center',zIndex:10}}
              
               >
 
                 <Ionicons
               name="camera"
               size={35}
               color="white"
             
             />
 
  </Pressable>
  <View style={styles.container}>
      <ChatStatusListView imgUrl='https://randomuser.me/api/portraits/women/76.jpg'/>
    </View>
   
    </>

  
  )
}
 
export default ChatStatus;