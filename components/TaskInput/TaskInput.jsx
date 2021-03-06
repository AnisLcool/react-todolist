import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react'

const TaskInput = ({ clickHandler, showModal, hideModalHandler }) => {
    // separation of concerns
    const [taskValue, setTaskValue] = useState('');
    const onChangeHandler = (text) => {
        setTaskValue(text);
    }

    const add = () => {
        clickHandler(taskValue);
        setTaskValue('');
    }
    return (
        <Modal animationType='slide' visible={showModal}>
            <View style={styles.addTaskWrapper}>
                {/* 1ere solution */}
                {/* <TextInput style={styles.textInput} placeholder='write a task ...' onChangeText={(text) => setTaskValue(text)} /> */}
                {/* 2eme solution */}
                <TextInput value={taskValue} style={styles.textInput} placeholder='write a task ...' onChangeText={onChangeHandler} />
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btnAdd} onPress={add}>
                        <Entypo name='plus' size={30} color='#ccc' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnAdd} onPress={hideModalHandler}>
                        <Entypo name='cross' size={30} color='red' />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default TaskInput

const styles = StyleSheet.create({
    addTaskWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
        flex: 1
    },
    textInput: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        width: '80%',
    },
    btnWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 30
    },
    btnAdd: {
        marginHorizontal: 10,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
    }
})