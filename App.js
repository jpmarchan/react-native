/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App(){
  const[enteredGolad,setEnterdGoal]=useState('');
  const[courseGoals,setCourseGoals]=useState([]);

  const  goalInputHandler=(enteredText)=>{
  setEnterdGoal(enteredText);
};
  const addGoalHandler=()=>{
   
    setCourseGoals(courrentGoals=>[...courrentGoals,enteredGolad]);
    console.log(enteredGolad);
  }

  return (
    <View  style={{padding:60 , flexDirection:'row-reverse'}}>
      <View style={{ flexDirection:"row-reverse", justifyContent:'space-between',alignItems:'center'}}>
      <TextInput
       placeholder="Course hold"
       style={styles.input}
       onChangeText={goalInputHandler}
       value={enteredGolad}
       style={{width:'80%', borderColor:'black',borderWidth:1 ,padding:10}}/>
      <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
  {courseGoals.map((goal)=><Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  
  },

});


