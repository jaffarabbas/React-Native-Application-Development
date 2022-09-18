import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import FlatScreenDemo from './FlatScreenDemo';

const name = 'jaffar'

const getMyName = (name) => {
    return name;
}

const CustomComponents = () => {
  return (
    <View>
        <Text style={styles.text}>CustomComponents {getMyName(name)}</Text>
        <FlatScreenDemo/>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 50,
      fontSize: 20
    }
  });
export default CustomComponents