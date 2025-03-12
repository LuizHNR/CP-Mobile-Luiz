import { Text, View } from "react-native";

export default (props)=>{
    let nomeProduto = props.nomeProduto
    let valorProduto = props.valorProduto
    let porcentagemAumento = props.porcentagemAumento
    let valorFinal = parseFloat(valorProduto) + parseFloat(valorProduto*(porcentagemAumento))

    return(
        <View>
            <Text>{nomeProduto}</Text>
            <Text>{valorProduto} - {porcentagemAumento}</Text>
            <Text>{valorFinal}</Text>
        </View>   
    )
}