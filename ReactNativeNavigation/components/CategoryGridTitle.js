import {View,Pressable,Text,StyleSheet} from 'react-native'

function CategoryGridTitle({title,color,onPress}) {
  return (
    <View style={[styles.gridItem , {backgroundColor:color}]}>
        <Pressable onPress={onPress} android_ripple={{color:'#333'}} style={styles.button}>
            <View style={styles.innerContainer}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>    
  )
}

const styles =StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
})

export default CategoryGridTitle
