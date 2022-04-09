import React,{useState} from 'react';
import {Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';

const ChatHeader = (props) => {
    const navigation = useNavigation();
    const onPress = ()=>{
        navigation.goBack();
    }
    

  return (
    <View style={styles.header}>
      
        <Pressable onPress={onPress}  android_ripple={{color: 'black', borderless: true}}>
        <View style={styles.leftHeader}>
        <Ionicons name="arrow-back" size={35} color="white" />
      </View>
        </Pressable>
     
      <View style={styles.rightHeader}>
       
        <View style={styles.rightHeaderTitleContainer}>
          <Text style={styles.headerMainTitle}>Select Contact</Text>
          <Text style={styles.headerSubTitle}>222 Contacts</Text>
        </View>
       
        <View style={styles.rightHeaderIcons}>
        <Pressable onPress={props.onPressSearchIcon} android_ripple={{color: 'black', borderless: true}}>
        <Ionicons name="search" size={30} color="black" style={styles.searchIcon}/>
        </Pressable>
        <Pressable onPress={props.onPressMenuIcon}  android_ripple={{color: 'black', borderless: true}}>
        
        <Ionicons name="ellipsis-vertical" size={30} color="black" style={styles.menuIcon}/>
        
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
    height:80,
    backgroundColor:Colors.headerBackground
  },
  leftHeader:{
      flex:0,
    //   backgroundColor:'green'
  },
  rightHeader:{
      flex:1,
    //   backgroundColor:'yellow',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:10
  },
  headerMainTitle:{
      fontSize:22,
      fontWeight:'bold',
      color:Colors.pureWhite
  },
  rightHeaderTitleContainer:{
    marginLeft:10,
  },
  headerSubTitle:{
      fontSize:16,
      fontWeight:'300',
      color:Colors.pureWhite
  },
  rightHeaderIcons:{
      flexDirection:'row'
  },
  searchIcon:{
      marginRight:20,
      color:Colors.pureWhite
  },
  menuIcon:{
    color:Colors.pureWhite
  }
});

export default ChatHeader;
