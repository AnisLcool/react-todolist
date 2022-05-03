import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert, Keyboard, FlatList, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Task from './components/Task';
import FlexBox from './FlexBox';
import TaskInput from './components/TaskInput/TaskInput';

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

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // diff entre onChange et onChangeText:
  // onChange: sa fonction handler recoit 'event', pour acceder à la valeur => event.target.value
  // onChangeText : sa fonction recoit le 'text'


  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }

  const addTaskHandler = (value) => {
    // la taille de '' => 0 , la taille de '     ' => 5
    // '            '.trim() => '',         '         anis anis      '.trim() => 'anis';
    if (value.trim().length === 0) {
      return;
    }
    Keyboard.dismiss();
    setShowModal(false);
    setTasks([...tasks, value]);




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

        {/* itemData.item => 'anis' ou 'savon' ou 'test' ['anis','savon','test'] */}
        <FlatList data={tasks} style={styles.items} renderItem={(itemData) => <Task onDelete={() => onDeleteHandler(itemData.index)} text={itemData.item} />} />

      </View>

      <View style={styles.addGoalWrapper}>
        <TouchableOpacity onPress={showModalHandler} style={styles.addGoal}>
          <Text style={styles.addGoalText}>ADD</Text>
        </TouchableOpacity>
      </View>


      <TaskInput showModal={showModal} clickHandler={addTaskHandler} hideModalHandler={hideModalHandler} />

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

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
    marginTop: 10,

  },
  addGoalWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  addGoal: {
    backgroundColor: '#0069D9',
    color: 'white',
    width: "30%",
    alignItems: 'center',
    maxWidth: '80%',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10
  },
  addGoalText: {
    color: 'white',
    fontSize: 20,
  }
})