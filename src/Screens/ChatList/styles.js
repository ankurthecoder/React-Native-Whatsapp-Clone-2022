import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:0,
        backgroundColor:Colors.chatListBackground
    },
    menuVisible:{
        display:'flex'
      },
    menuHide:{
        display:'none'
      }
});

export default styles;