import { Text } from "react-native"
import { ActivityIndicator, View } from "react-native"
import { StyleSheet } from "react-native"
import { useGlobalContext } from "../ctx/GlobalProvider"

export default function Loader(){

    const {loading} = useGlobalContext()

    return(        
        loading && <View style={style.container}>
            <ActivityIndicator size={"large"} color="#0000ff"/>
            <Text style={{color:"#0000ff"}}>Түр хүлээнэ үү</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        position:"absolute", 
        width:"100%", 
        height:"100%", 
        justifyContent:"center", 
        alignItems:"center", 
        backgroundColor:"rgba(0, 0, 0, 0.09)"
    }
})