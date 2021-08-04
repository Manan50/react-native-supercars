
import React from 'react';
import { StyleSheet, Text, StatusBar, ImageBackground,Button,Dimensions, View } from 'react-native';
import Caritem from "./components/Caritem";
import CarsList from './components/CarsList';
import Header from "./components/Header";


export default class MyComponent extends React.Component {
  render(){
  return (
    <View style={style.container}>
      <Header/>
      <CarsList/>
      
      
      
    </View>
  );
}
}



const style = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
 
  
});
