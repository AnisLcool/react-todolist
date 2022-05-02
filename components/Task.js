import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = (props) => {
   
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}>

                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}>

            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor:'white',
        padding:15,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20,
        flexWrap: 'wrap'
    },
    itemLeft: {
        flexDirection:'row',
        maxWidth: '100%',
        
        flexWrap:'wrap'
    },
    square: {
       width: 24,
       height: 24,
       backgroundColor:'#55BCF6' ,
       opacity:0.4,
       borderRadius: 4
    },
    itemText: {
        marginHorizontal: 10
    },
    circle: {
        borderColor:'#55BCF6',
        borderWidth: 3,
        width: 24,
        height: 24,
        borderRadius: 24
    },
})

