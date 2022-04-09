import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
const SearchView = props => {
   
  return (
   
      <View style={styles.container}>
          <Pressable android_ripple={{color: 'black', borderless: true}} onPress={props.onPressSearchBackIcon}>
       <View style={styles.leftHeader}>
        <Ionicons name="arrow-back" size={35} color="white" />
      </View>
      </Pressable>
       <View style={styles.rightHeader}>
      <TextInput  autoFocus = {true} style={styles.txtnput} placeholder="Search..." placeholderTextColor={Colors.lightGray} />
       </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
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
        paddingHorizontal:10
    },
    txtnput:{
        fontSize:23,
        color:'#fff',
        fontWeight:'400', 
    }
});

export default SearchView;
