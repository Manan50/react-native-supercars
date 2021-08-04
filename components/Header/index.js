import React from 'react';
import { Text, View,Image, Alert,TouchableOpacity} from 'react-native';
import styles from "./style";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Header = () => {
    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'raleway': require('../../assets/fonts/raleway.ttf'),
        'CormorantSemiBold': require('../../assets/fonts/CormorantSemiBold.ttf'),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
 
    return (

        <View style={styles.container}>
            <Text style={styles.logo}> SuperCars </Text>
            <Text style={styles.menu}>The one's you wish to buy. </Text>
        </View>

    );
};
};
    export default Header;