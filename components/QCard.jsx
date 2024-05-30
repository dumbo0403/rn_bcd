import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { useGlobalContext } from "../ctx/GlobalProvider";

const QCard = ({item, index})=>{

    const [selectedButton, setSelectedButton] = useState()
    const {point, setPoint} = useGlobalContext()

    function onyes(){
        if(selectedButton == 1){
            setSelectedButton(0)
            setPoint([...point, -5])
        }else{
            setSelectedButton(1)
            setPoint([...point, 5])
        }
    }

    function onmid(){
        if(selectedButton == 2){
            setSelectedButton(0)
            setPoint([...point, -3])
        }else{
            setSelectedButton(2)
            setPoint([...point, 3])
        }
    }

    function onno(){
        if(selectedButton == 3){
            setSelectedButton(0)
            setPoint([...point, -1])
        }else{
            setSelectedButton(3)
            setPoint([...point, 1])
        }
    }

    return(
        <Card 
            left
            style={styles.item}>
            <View style={{justifyContent:"space-evenly"}}>
                <Text>{item}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Button style={{
                    backgroundColor: selectedButton == 1 ? "pink":"white"
                }} onPress={onyes}>Тийм</Button>
                {index == 4 || index == 5 ? 
                <Button 
                style={{
                    backgroundColor: selectedButton == 2 ? "pink":"white"
                }}
                onPress={onmid}>Дунд</Button>:<></>}
                <Button 
                style={{
                    backgroundColor: selectedButton == 3 ? "pink":"white"
                }}
                onPress={onno}>Үгүй</Button>
            </View>
        </Card>
    )
}

export default QCard;

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
});