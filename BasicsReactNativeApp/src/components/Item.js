import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Item(props) {
  return (
    <View>
        <Pressable onPress={props.onClick.bind(this,1)}>
            <Text style={styles.container}>{props.text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});