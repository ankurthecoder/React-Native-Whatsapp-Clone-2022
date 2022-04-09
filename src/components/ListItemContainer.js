import React, {useState} from 'react';
import {StyleSheet, TextInput,View,Button} from 'react-native';
const ListItemContainer = (props) => {
    const [inputText, onChangeInput] = useState('');
    const inputTextHandler = inputText => {
        onChangeInput(inputText);
      };
  return (
    <View style={styles.inputContainer}>
    
      <TextInput
        placeholder="Enter text here.."
        style={styles.input}
        onChangeText={inputTextHandler}
      />
        <Button title="ADD" onPress={()=>props.onAddClick(inputText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 22,
    borderWidth:1,
    borderColor:'green'
  },
  inputContainer: {
    width: '100%',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',  
  },

  listContainer: {
    marginTop: 10,
  },
});
export default ListItemContainer;
