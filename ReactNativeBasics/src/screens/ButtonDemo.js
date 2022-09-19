import React from 'react'
import { Alert, Button } from 'react-native'

const ButtonDemo = () => {
  return (
    <Button
        onPress={() => {
            Alert.alert("hello","asdasd")
        }}
        title="Touch Me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
  )
}

export default ButtonDemo