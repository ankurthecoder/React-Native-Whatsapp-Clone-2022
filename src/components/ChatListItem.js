import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
const ChatListItem = props => {
  return (
    
     <View style={styles.itemContainer}>
        <View style={styles.usrImgContainer}>
        <Image 
          style={styles.userImg}
         source={{uri:props.data.imgUrl}
  }
      />
        </View>
        <View style={styles.usrInfoContainer}>
            <Text style={styles.userName}>Ankur Gupta</Text>
            <Text style={styles.userStatus}>Available</Text>
        </View>
     </View>
    
  );
};

const styles = StyleSheet.create({
    itemContainer:{
        
        padding:10,
        marginTop:10,
        flexDirection:'row',
        
    },
    usrImgContainer:{

    },
    userImg:{
        width: 60,
        height: 60,
        borderRadius: 60/ 2
    },
    usrInfoContainer:{
      
        flex:1,
        marginHorizontal:20,
        justifyContent:'center'
    },
    userName:{
        fontSize:22,
        fontWeight:'bold',
        color:Colors.pureWhite
    },
    userStatus:{
        fontSize:18,
        fontWeight:'400',
        color:Colors.lightGray
    }
});

export default ChatListItem;
