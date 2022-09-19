import React from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'
import ImageComponent from '../components/ImageComponent'

const Images = () => {
  return (
    <ImageComponent
      source={require("../../assets/background2.png")}
    />
  )
}

export default Images