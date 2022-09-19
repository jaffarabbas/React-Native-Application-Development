import React from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import ButtonDemo from './ButtonDemo';
import CustomButton from './CustomButton';
import Images from './Images';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const FlatScreenDemo = () => {
  const names = [
    {
        'id':'1',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'2',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'3',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'4',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'5',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'6',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'7',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'8',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'9',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'10',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'11',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'12',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    },{
        'id':'13',
        'names':"jaffar",
        'cources':['a','s','d','f'],
    }
  ];
  return (
    <View style={styles.listView}>
         <FlatList 
         keyExtractor={(key) => {
            return key.id
         }}
         data={names} renderItem={(element) =>{
            return <>
            {/* <Text style={styles.text}>{element.item.names}</Text> */}
            <FlatList 
            data={element.item.cources}
            horizontal
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
            renderItem = {(sub) => {
               return (
               <>
                <View style={styles.cardView}>
                    <Images/>
                    <Text style={styles.text}>{sub.item}</Text>
                    <ButtonDemo/>
                    <CustomButton/>
                </View>
               </>
               )
            }}
            />
            </>
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    listView:{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      paddingHorizontal:20,
      paddingVertical:30,
    },
    text:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    cardView:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 1,
        padding: 20,
        textAlign: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 50,
        margin: 10
    }
});

export default FlatScreenDemo