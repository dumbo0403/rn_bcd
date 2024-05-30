import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useGlobalContext } from "../ctx/GlobalProvider";
import { router } from "expo-router";

export default function IP(){

    const {setIp} = useGlobalContext()

    return(
        <View style={{alignItems:"center"}}>
            <View style={style.inputStyle}>
                <TextInput onChange={(e)=>{
                    setIp("http://"+e.nativeEvent.text)
                }}label={"Серверийн IP хаяг"}/>
            </View>
            <Button children={
                <Text>Дараагийнх</Text>
            }
                onPress={()=>{
                    router.navigate("/")
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    inputStyle:{
        width:"90%",
        marginTop:20,
        // borderRadius:20,
        // borderWidth:1
    }
})