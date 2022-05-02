import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
          <Text>1</Text>
      </View>

      <View style={styles.blueBox}>
          <Text>2</Text>
      </View>

      <View style={styles.greenBox}>
          <Text>3</Text>
      </View>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',// padding: 50, borderColor: 'black',borderWidth: 2,
        height: 300,
        borderWidth: 2,
        borderColor: 'black'
    },
    redBox:{
        backgroundColor:'red',
        flex: 6, 
        // width: 100,
        // height: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    blueBox:{
        backgroundColor:'blue',
        flex: 4,
        // width: 100,
        // height: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    
    greenBox:{
        backgroundColor:'green',
        flex: 5,
        // width: 100,
        // height: 100,
        justifyContent:'center',
        alignItems:'center'
    }
})