import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const TextInputComponent = (props) => {
  return (
    <View style={styles.txtComponentView}>
      <TextInput
        style={styles.txtComponent}
        placeholder='Enter your text'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  txtComponentView:{
    padding: 20
  },
  txtComponent: {
    borderColor: '#fff',
    borderWidth:1,
    padding: 10
  }
});

export default TextInputComponent