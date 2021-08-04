import React, { Component, useState } from 'react'
import { Text, View, ImageBackground, StatusBar, Button, Modal, Alert,Pressable, TouchableHighlight} from 'react-native'
import styles  from './styles';
import Styledbutton from "../StyleButton";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Caritem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
    const {name, tagline , image, para,modalimage,} = props.car;
    let [fontsLoaded] = useFonts({
      'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      'raleway': require('../../assets/fonts/raleway.ttf'),
      'CormorantSemiBold': require('../../assets/fonts/CormorantSemiBold.ttf'),
    });
      
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.bg}/>
        <View style={styles.titles}>

      <Text style={styles.title1}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}</Text>
     
      </View>
       <Modal style={styles.modal1}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} >{para}</Text>
            <ImageBackground source={modalimage} style={styles.modalimg}/>
            <TouchableHighlight
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
              
            </TouchableHighlight>
            
          </View>
        </View>
       </Modal>
        <TouchableHighlight
        style={[styles.button1, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show More</Text>
        </TouchableHighlight>
        
      </View>
    );

};
};
    


export default Caritem;

