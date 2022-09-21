import React, { useState } from 'react'
import { View,Text,StyleSheet, SafeAreaView } from 'react-native'
import TextInputComponent from '../components/TextInputComponent';
import FlatScreenDemo from './FlatScreenDemo';

const name = 'jaffar'

const getMyName = (name) => {
    return name;
}

const CustomComponents = () => {
  return (
    <SafeAreaView>
      <View style={styles.headView}>
        <Text style={styles.text}>Scroll Flat List By {getMyName(name)}</Text>
        <TextInputComponent/>
        <FlatScreenDemo/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headView:{
    marginTop:120,
  },
  text:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    }
  });
export default CustomComponents