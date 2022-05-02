import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <ScrollView style={styles.items}>

          <Task text='anis'  />
        </ScrollView>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E8EAED'
  },
  taskWrapper: {
    paddingTop:80,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold',
    marginHorizontal : 20
  },
  items: {

  },
})