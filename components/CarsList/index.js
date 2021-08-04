import React from 'react';
import { View,Text,FlatList, Dimensions } from 'react-native';
import Caritem from "../Caritem";
import {StyledButton} from "../StyleButton";
import styles from "./style";
import cars from "./cars";

const CarsList = (props) => {
    return(
        <View style={styles.containedList}>
                <FlatList
                data={cars}
                renderItem={({item}) => <Caritem car = {item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
                />
                

        </View>
    );
};
 

export default CarsList;
