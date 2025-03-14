import { Text, View, StyleSheet } from "react-native";

export default (props)=>{
    let nomeProduto = props.nomeProduto
    let valorProduto = props.valorProduto
    let porcentagemAumento = props.porcentagemAumento
    let valorFinal = parseFloat((valorProduto * (porcentagemAumento)) / 100)

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{nomeProduto}</Text>
            <Text style={styles.numeros}>{valorProduto} - {porcentagemAumento}</Text>
            <Text style={styles.numeros}>{valorFinal}</Text>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
      gap: 10,
      padding:10,
      width:200,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text: {
        fontSize:25,
        fontWeight:"bold",
    },
    numeros: {
        fontSize:18,
    }
  });