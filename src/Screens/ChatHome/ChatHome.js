import React,{useState} from 'react';
import { StyleSheet, Text, View,Pressable,ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ChatListView from '../../components/ChatListView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import  USERSINFO  from '../../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';


const ChatHome = (props) => {
  const navigateToContactListView = () =>{
    props.navigation.navigate('ChatList')
   }
   const renderListItem=(itemData)=> {
   
    return (
      <ChatListView data={itemData.item} />
    );
  } 
  return (
    <>
 <Pressable style={{width:80,height:80,borderRadius:80/2,
               backgroundColor:Colors.greenHighlight,position:'absolute',
               bottom:30,right:10,fontWeight:'bold',justifyContent:'center',
               alignItems:'center',zIndex:10}}
               onPress={navigateToContactListView}
               >
 
                 <Ionicons
               name="chatbox-sharp"
               size={35}
               color="white"
             
             />
 
  </Pressable>
   <View style={styles.container}>
        
        <FlatList
          data={USERSINFO}
          renderItem={renderListItem}
          keyExtractor={(item)=>item.id}
        />

         
      
      </View>
     
    </>
   
  
  )
}
 
export default ChatHome;