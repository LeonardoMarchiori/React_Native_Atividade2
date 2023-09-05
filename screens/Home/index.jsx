import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"


export function Home(){

    const [result, setResultado] = useState([]);
    const [textResult, setText] = useState('');
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
  
    function setResult() {
      setResultado(peso / (altura * altura)) 
      console.log(result);
  
      if (result < 18.5) { setText('Abaixo do peso') } 
      if (result >= 18.5 && result < 24.9) { setText('Peso normal')  } 
      if (result >= 25 && result < 29.9) { setText('Sobrepeso') }  
      if (result >= 30 && result < 34.9) { setText('Obesidade grau 1') } 
      if (result >= 35 && result < 39.9) { setText('Obesidade grau 2') } 
      if (result >= 40) { setText('Obesidade grau 3') }

    }

    return(
    <View style = {styles.container}>

        <View style = {styles.header}>
        <Text style = {styles.title}>Calculadora de IMC</Text>
        <Text style = {styles.explication}>Descubra qual é seu índice de massa corporal</Text>
        </View>

        <View style = {styles.information}>
        <Text style = {styles.informationText}>Peso(Kg)</Text>
        <Text style = {styles.informationText}>Altura(m)</Text>
        </View>

        <View style = {styles.Inputs}>
        <TextInput style = {styles.textInput} onChangeText={setPeso} value={peso}> </TextInput>
        <TextInput style = {styles.textInput} onChangeText={setAltura} value={altura}> </TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={setResult} >   
              <Text style = {styles.textButton}> CALCULAR </Text>
        </TouchableOpacity>

        <View style={styles.assection}>
        <Text style={styles.textIndex}>Seu indice de massa corporal é: </Text>
        <Text style={styles.textResultado}>{textResult}</Text>
        </View>

        <Text style={styles.textUNIPAR}>UNIPAR</Text>


    </View>



    )
}
