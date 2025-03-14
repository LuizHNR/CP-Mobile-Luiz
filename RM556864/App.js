import { useState } from 'react';
import { StyleSheet, Text, Image, View,TextInput, Button } from 'react-native';
import Resultado from './components/Resultado';

export default function App(props) {

  const[valorProduto,setValorProduto]=useState('')
  const[nomeProduto,setNomeProduto]=useState('')
  const[porcentagemAumento,setPorcentagemAumento]=useState('')
  const[mostrarDados,setMostrarDados] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Text>RM556864 Luiz Henrique Neri Reimberg</Text>
      </View>
      <Image
        source={require('./assets/money.png')}
        style={styles.imagem}
      />
      <TextInput
        placeholder='Digite o nome do produto'
        style={styles.input}
        keyboardType='default'
        maxLength={10}
        value={nomeProduto}
        onChangeText={(valor)=>setNomeProduto(valor)}
      />
      <TextInput
        placeholder='Digite o valor do produto'
        style={styles.input}
        keyboardType='number-pad'
        value={valorProduto}
        onChangeText={(valor)=>setValorProduto(valor)}
      />
      <TextInput
        placeholder='Digite a porcentagem do aumento'
        style={styles.input}
        keyboardType='numbers-and-punctuation'
        value={porcentagemAumento}
        onChangeText={(valor)=>setPorcentagemAumento(valor)}
      />
       <Button
        title='Clique aqui para enviar'
        onPress={()=>setMostrarDados(true)}
      />

      {mostrarDados&&<Resultado nomeProduto={nomeProduto} valorProduto={valorProduto} porcentagemAumento={porcentagemAumento} valorFinal={props.valorFinal}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagem:{
    resizeMode:"contain",
    height:150
  },
  input:{
    backgroundColor:"#fff",
    width:300,
    borderRadius:10,
    paddingLeft:20,
    borderWidth:2,
    borderColor:"#515151",
    fontSize:15
  }
});