import { StyleSheet, Text, View } from "react-native";
import CustomImagePicker from "../components/ImagePicker";
import { Button, Divider, MD3Colors, ProgressBar } from "react-native-paper";
import { useGlobalContext } from "../ctx/GlobalProvider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Index() {

  const {malignant, benign, cancer} = useGlobalContext()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Button children={<Text>IP Хаяг оруулах</Text>}
        onPress={()=>{
          router.navigate("ip")
        }}
      />
      <CustomImagePicker/>
      <View style={{width:"90%"}}>
        <Text>Хавдар: {malignant > 0 ? cancer.toFixed(2):''}</Text>
        <ProgressBar style={[style.progress, style.bShadow]} progress={cancer} color={"orange"} />
        <Text>Эрүүл(Нэмэлт модель): {benign > 0 ? benign.toFixed(2):''}</Text>
        <ProgressBar style={[style.progress, style.bShadow]} progress={benign} color={"green"} />
        <Text>Хавдар(Нэмэлт модель): {malignant > 0 ? malignant.toFixed(2):''}</Text>
        <ProgressBar style={[style.progress, style.bShadow]} progress={malignant} color={"red"} />
      </View>
      <Button 
            onPress={()=>{
              router.navigate("form")
            }}
            backgroundColor={"white"} style={{
              width:60,
              height:65,
              borderColor:"black",
              borderWidth:1 ,
              position:"absolute", 
              right:30, bottom:30,
              borderRadius:70,
              justifyContent:"center",
              alignItems:"center"  
            }}
              >
            <Ionicons name="document-text" size={23}/>
          </Button>
    </View>
  );
}

const style = StyleSheet.create({
  progress:{
    height:20,
    marginVertical:5,
    borderRadius:10,
  },
  bShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 6,  
    elevation: 10
  }
})