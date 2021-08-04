import  { StyleSheet , Dimensions} from 'react-native'


const styles = StyleSheet.create({
container:{
        position:"absolute",
        top:50,
        zIndex:2,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        paddingHorizontal:20,
},
logo:{
fontSize:30,
fontFamily:"CormorantSemiBold",
color: "#bc6ff1",
textDecorationLine:"underline",

},
menu:{
    fontSize:10,
    fontFamily:"raleway",
    color: "#bc6ff1",
    
},
});

export default styles;