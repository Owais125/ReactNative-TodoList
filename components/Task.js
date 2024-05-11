import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = (props) => {

    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.squar}>

                </View>

                <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circular}>

            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        width:300,
        // alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20

    },
    itemLeft: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'space-between',

    },
    squar: {
        width:24,
        height:24,
        backgroundColor:'orange',
        opacity:0.5,
        borderRadius:5,
        marginRight:-110
    },
    itemText: {
        maxWidth:'80%'
    },
    circular: {
        width:12,
        height:12,
        borderColor:'orange',
        borderWidth:2,
        borderRadius:5
    },
})

export { Task }