import React from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'

const ImageComponent = (props) => {
  return (
    <Image 
    style={styles.imageView}
    source={props.source} />
  )
}

const styles = StyleSheet.create({
  imageView:{
    width:200,
    height:200
  }
});

export default ImageComponent