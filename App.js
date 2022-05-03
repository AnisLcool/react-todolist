import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert,Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Task from './components/Task';
import FlexBox from './FlexBox';

// ======================= INTRODUCTION =========================
// export default function App() {
//   return (
//     <View style={styles.container}>
//      <Text style={styles.textColor}>salut</Text>
//      <Text style={{color:'cyan'}}>bonjour</Text>
//     </View>
//   );
// }
// // convention : utiliser le nom styles
// const styles = StyleSheet.create({
//   // .container{

//   // }

//   container: {
//     flex: 1,
//     // background-color: '#fff' en css
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textColor:{
//     color: 'red'
//   }
// })


// rnfes : React Native Functional Expression Stylesheet

// ========================== FLEXBOX ======================
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlexBox />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     borderColor: 'red',
//     borderWidth: 3,
//     flex: 1
//   }
// })

const App = () => {
  const [taskValue, setTaskValue] = useState('');
  const [tasks, setTasks] = useState([]);

  // diff entre onChange et onChangeText:
  // onChange: sa fonction handler recoit 'event', pour acceder à la valeur => event.target.value
  // onChangeText : sa fonction recoit le 'text'

  const onChangeHandler = (text) => {
    setTaskValue(text);
  }

  const addTaskHandler = () => {
    // la taille de '' => 0 , la taille de '     ' => 5
    // '            '.trim() => '',         '         anis anis      '.trim() => 'anis';
    if(taskValue.trim().length === 0){   
      return;
    }
    Keyboard.dismiss();
    // 1ere solution:
    setTasks([...tasks, taskValue]);
    // 2eme solution:
    // setTasks((prevTasks) => {
    //   return [...prevTasks, taskValue];
    // })
    // 3eme solution
    // setTasks((prevTasks) => {
    //   return prevTasks.concat(taskValue);
    // })
    // 4eme solution
    // setTasks((prevTasks) => prevTasks.concat(taskValue))


    setTaskValue('');
  }

  const onDeleteHandler = (index) => {
    // Alert.alert('titre','text de description','tableau d\'objets pour les boutton')
    Alert.alert('Supprimer une tache', 'Vous etes sure?',
      [
        { text: 'Annuler', style: 'cancel', onPress: () => { } },
        { text: 'Confirmer', style: 'default', onPress: () => deleteTask() }
      ],
    )
    const deleteTask = () => {
      // ajouter une fenetre de confirmation
      // mutable way, immutable way
      // pour supprimer un élément depuis un tableau : filter , splice , slice
      // 1ere solution;


      // 2eme solution;
      //  setTasks((prevTasks) => prevTasks.filter((element, idx) => idx !== index));
      const newTasks = tasks.filter((element, idx) => idx !== index);
      setTasks(newTasks);
    }


  }



  const taskElements = tasks.map((element, index) => {
    // 1ere façon
    return <Task onDelete={() => onDeleteHandler(index)} text={element} key={index} />
    // 2eme façon

    // return <Task index={index} onDelete={onDeleteHandler} text={element} key={index} />
  });

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <ScrollView style={styles.items}>

          {taskElements}


        </ScrollView>
      </View>

      {/* coller içi */}
      <View style={styles.addTaskWrapper}>
        {/* 1ere solution */}
        {/* <TextInput style={styles.textInput} placeholder='write a task ...' onChangeText={(text) => setTaskValue(text)} /> */}
        {/* 2eme solution */}
        <TextInput value={taskValue} style={styles.textInput} placeholder='write a task ...' onChangeText={onChangeHandler} />
        <TouchableOpacity style={styles.btnAdd} onPress={addTaskHandler}>
          <Entypo name='plus' size={30} color='#ccc' />
        </TouchableOpacity>
      </View>
      {/* ======================= */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
    justifyContent: 'space-between'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingVertical: 20,
    flex: 1,
    
    // height:'70%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20
  },
  items: {
    // flex: 1
    // height:'50%'
    // padding: 10,
    margin: 10,

  },
  // COLLER içi
  addTaskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
    // height:'30%'
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
  // ===============
})