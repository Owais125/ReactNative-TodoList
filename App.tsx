import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Task } from './components/Task'

const App = () => {
  const [task, setTask] = useState()
  const [taksItem, setTaksItem] = useState([])
  const handleAdd = ()=>{
    Keyboard.dismiss()
    setTaksItem([...taksItem , task])
    setTask(null)
    
   
  }
  const completeTaks = (i)=>{
    let itemsCopy = [...taksItem]
    itemsCopy.splice(i,1)
    setTaksItem(itemsCopy)


  }
  return (
    <View style={styles.containar}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Todo List
        </Text>
        <View style={styles.items}>
          {
            taksItem.map((item,i)=>{
              return <TouchableOpacity key={i}  onPress={()=>completeTaks(i)}>

                <Task  text={item}/>
              </TouchableOpacity>
        

            })
          }

        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}
        onChangeText={text =>setTask(text == ''?Alert:text)}/>

        <TouchableOpacity onPress={handleAdd}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +
            </Text>

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    backgroundColor: '#ECF6F6'
  },
  tasksWrapper:{
    paddingTop: 40,
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center'
  },
sectionTitle:{
  fontSize:30,
  fontWeight:'bold'
 
},
items:{
  marginTop:30
},
writeTaskWrapper:{
  position:'absolute',
  bottom:40,
  left:25,
  width:'90%',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},
input:{
  paddingHorizontal:15,
  paddingVertical:15,
  backgroundColor:'#FFF',
  width:250,
  borderRadius:60,
  paddingLeft:20
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#FFF',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:60,
},
addText:{},

})

export default App