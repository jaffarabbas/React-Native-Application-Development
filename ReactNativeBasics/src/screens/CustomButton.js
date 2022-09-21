import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CustomButton = () => {
    return (
        <TouchableOpacity
            onPress={() => {
                Alert.alert("hello", "asdasd")
            }}
        >
            <View style={styles.btnView}>
                <Text>Custom Button</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnView: {
        backgroundColor: '#fff',
        color: '#333',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
});

export default CustomButton