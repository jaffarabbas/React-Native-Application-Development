import React from 'react'
import { View,Text,StyleSheet, SafeAreaView } from 'react-native'
import FlatScreenDemo from './FlatScreenDemo';

const name = 'jaffar'

const getMyName = (name) => {
    return name;
}

const CustomComponents = () => {
  return (
    <SafeAreaView>
      <View style={styles.headView}>
        <Text style={styles.text}>Sroll Flat List By {getMyName(name)}</Text>
        <FlatScreenDemo/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headView:{
    marginTop:70,
  },
  text:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    }
  });
export default CustomComponents