import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({

    container:{
        backgroundColor: '#967ADC', 
        flex: 1, 
        padding: 24,
    },

    header:{
        alignItems: 'center',
        marginTop: 10,
        
    },

    title:{
        fontSize: 20,
        color: '#fff'
    },

    explication:{
        color: '#fff'
    },

    information:{
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-between',
        

    },

    informationText:{
        color: '#fff',

    },

    Inputs:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,

    },

    textInput:{
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '45%',
        color: '#967ADC',
        fontSize: 20,

    },

    button:{
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '25%',
     
    },
    
    textButton:{
        color:'#967ADC',
        fontSize:25,
    },

    assection: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10',
        marginTop: 25,
  
      },

      textIndex: {
        color: '#967ADC',
        fontSize: 14,
      },

      textResultado: {
        color: '#967ADC',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: "bold"
      },

      textUNIPAR: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: "bold",
        marginTop: 35
      }

      

})