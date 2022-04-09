import React,{useState} from 'react';
import { StyleSheet, Text, View,Pressable,ScrollView, TouchableWithoutFeedback } from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import ChatListItem from '../../components/ChatListItem';
import MenuSelector from '../../components/MenuSelector';
import SearchView from '../../components/SearchView';
import styles from './styles';
import  USERSINFO  from '../../data/dummy-data';   
import { FlatList } from 'react-native-gesture-handler';
const ChaltList = ({navigation}) => {
   
  const [isMenuShown,SetMenuVisibility] = useState(false);
  const [isSearchView,SetSearchView] = useState(false);
  const onMenuPressHandler = ()=>{
    SetMenuVisibility(true);
   
  }
  const onPressSearchIconHandler = ()=>{
    SetSearchView(true)
  }
  const onOutsideClickHandler = () =>{
 console.log('2');
    (isMenuShown)?  SetMenuVisibility(false):null;
  }

  const onPressSearchBackIconHandler = () =>{
    SetSearchView(false)
  }
  const renderListItem=(itemData)=> {
   
    return (
      <ChatListItem onStartShouldSetResponder={() => true} data={itemData.item} />
    );
  } 
  return (
    <TouchableWithoutFeedback  delayPressIn={1000}   onPress={onOutsideClickHandler}>
     
  <View style={styles.container}>
    {(isSearchView)?<SearchView onPressSearchBackIcon = {onPressSearchBackIconHandler} />:<ChatHeader onPressSearchIcon={onPressSearchIconHandler} onPressMenuIcon={onMenuPressHandler}/>}
    
    <MenuSelector style={(isMenuShown)?styles.menuVisible : styles.menuHide} />

    {/* <ScrollView>
      {
        USERSINFO.map(user=>{
         return <ChatListItem data={user} />
        })
      }
    </ScrollView> */}
    <FlatList
          data={USERSINFO}
          renderItem={renderListItem}
          keyExtractor={(item)=>item.id}
        />
    
   
   
    </View>
 
   </TouchableWithoutFeedback>
   
  
  )
}
 
export default ChaltList;