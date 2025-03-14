import { useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';
import Resultado from './components/Resultado';

export default function App(props) {

  const [valorProduto, setValorProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [porcentagemAumento, setPorcentagemAumento] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);
  const [erro, setErro] = useState('');

  const validarCampos = () => {
    if (!nomeProduto.trim() || !valorProduto.trim() || !porcentagemAumento.trim()) {
      setErro('Todos os campos devem ser preenchidos!');
      setMostrarDados(false);
    } else if (isNaN(valorProduto) || isNaN(porcentagemAumento)) {
      setErro('O valor do produto e a porcentagem devem ser números válidos!');
      setMostrarDados(false);
    } else {
      setErro('');
      setMostrarDados(true); 
    }
  };

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
        onChangeText={(valor) => setNomeProduto(valor)}
      />
      <TextInput
        placeholder='Digite o valor do produto'
        style={styles.input}
        keyboardType='number-pad'
        value={valorProduto}
        onChangeText={(valor) => setValorProduto(valor)}
      />
      <TextInput
        placeholder='Digite a porcentagem do aumento'
        style={styles.input}
        keyboardType='numbers-and-punctuation'
        value={porcentagemAumento}
        onChangeText={(valor) => setPorcentagemAumento(valor)}
      />
      
      <Button
        title='Clique aqui para enviar'
        onPress={validarCampos}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      {mostrarDados && <Resultado nomeProduto={nomeProduto} valorProduto={valorProduto} porcentagemAumento={porcentagemAumento} valorFinal={props.valorFinal} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagem: {
    resizeMode: "contain",
    height: 150
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 10,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: "#515151",
    fontSize: 15,
    marginBottom: 10
  },
  erro: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  }
});
