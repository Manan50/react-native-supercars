import React  from 'react';
import {View,Text, Pressable} from "react-native";
import styles from './style';

 
const Styledbutton = (props) => {
    return(
        <View  style={styles.container}>
            
            <Pressable style={styles.button}
             title="push"
             onPress={() => {console.warn("Pressed")}} >
                <Text  style={styles.text}>Hello</Text>
            </Pressable>
        </View>
    );
};

export default Styledbutton;