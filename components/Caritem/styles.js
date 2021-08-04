import  { StyleSheet , Dimensions} from 'react-native'


const styles = StyleSheet.create({
    carContainer:{
        width: Dimensions.get("window").width ,
        height:Dimensions.get("window").height,
        flex:1,
      },
      titles:{
        marginTop: "30%",
        alignItems:"center",
        
      },
      title1:{
        fontSize: 35,
        fontWeight:"500",
        color:"#a685e2",
        letterSpacing: 0.5,
        fontFamily:"raleway",
      },
      subtitle:{
        fontSize: 20,
        color:"#e36bae",
        
        letterSpacing: 1,
        fontFamily:"Poppins-Regular",
      },
      bg:{
        flex:1,
        width:"100%",
        height:"100%",
        resizeMode: "cover",
        position:"absolute",
      },
      paragraph: {
        marginTop: "120%",
        fontSize: 25,
        fontWeight:"500",
        color:"#f4d160",
      },
      
      centeredView: {
      
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      },
      modalView: {
        height:"100%",
        width:"100%",
        margin: 250,
        backgroundColor: "#dbc6eb",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 20,
        width: 250,
        elevation: 2,
        position: "absolute",
        bottom:270,
        
      },
      buttonOpen: {
        backgroundColor: "#7868e6",
      },
      buttonClose: {
        backgroundColor: "#b8b5ff",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        alignItems: "center",
        fontWeight: "100",
        fontFamily:"raleway",
        color:"#111",
        
      },
      modalimg:{
        top:20,
        height:"50%",
        width:"100%",
        resizeMode: "cover",
      },
      button1: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        bottom:70,
        position: 'absolute',
        width:"70%",
        left: 60,
      },
      
});


export default styles;