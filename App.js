import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert,Keyboard , FlatList} from 'react-native';
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

  // diff entre onChange et onChangeText:
  // onChange: sa fonction handler recoit 'event', pour acceder à la valeur => event.target.value
  // onChangeText : sa fonction recoit le 'text'

 

  const addTaskHandler = (value) => {
    // la taille de '' => 0 , la taille de '     ' => 5
    // '            '.trim() => '',         '         anis anis      '.trim() => 'anis';
    if(value.trim().length === 0){   
      return;
    }
    Keyboard.dismiss();
   
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

      {/* coller içi */}
      <TaskInput clickHandler={addTaskHandler} />
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
  
  // ===============
})