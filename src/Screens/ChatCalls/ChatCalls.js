import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native'; 
import { FlatList } from 'react-native-gesture-handler';
import ChatCallsView from '../../components/ChatCallsView';
import styles from './styles';
import  {CALLSINFO}  from '../../data/dummy-data';


const ChatCalls = ({navigation}) => {
  const renderListItem=(itemData)=> {
   
    return ( 
      <ChatCallsView data={itemData.item}/>
    );
  } 
  return (
    <View style={styles.container}>
       <FlatList
          data={CALLSINFO}
          renderItem={renderListItem}
          keyExtractor={(item)=>item.id}
        />
      
    </View>
   
  
  )
}
 
export default ChatCalls;