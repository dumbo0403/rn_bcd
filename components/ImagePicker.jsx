import { useState } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import { useGlobalContext } from '../ctx/GlobalProvider';
import { send_image, send_image_to_model } from '../api/model_service';

export default function CustomImagePicker() {
  const [image, setImage] = useState(null);
  const [b64Image, setB64Image] = useState(null)
  const {setLoading, setMalignant, setBenign, message, setCancer, ip} = useGlobalContext()

  const pickImage = async () => {
    setLoading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    setB64Image(result.assets[0].base64)
    if (!result.canceled) {
      setLoading(false)
      setImage(result.assets[0].uri);
    }
    setLoading(false)
  };

  return (
    <View style={styles.container}>
        
        {image ? 
        <Image source={{ uri: image }} style={styles.image} />:<View style={styles.image}/>}
        
        <View style={{flexDirection:"row", justifyContent:"space-between", width:"80%"}}>
        <Button style={styles.button} 
            children={<Text style={{color:"black"}}>Зураг сонгох</Text>} 
            onPress={pickImage}/>
        {
            b64Image && 
            <>
              <Button style={styles.button} 
                children={<Text style={{color:"black"}}>Зураг шинжлэх</Text>}
                onPress={()=>{
                    setLoading(true)
                    send_image_to_model({b64_image:b64Image, ip:ip}, (res, err)=>{
                      setLoading(false)
                      if(err==null){
                        setCancer(parseFloat(res))
                      }else{
                        message("Дахин оролдоно уу", err)
                        console.log("Error", err)
                      }
                    })
                }}
                />
                <Button
                  style={styles.button}
                  children={<Text style={{color:"black"}}>Нэмэлт модель</Text>}
                  onPress={()=>{
                    setLoading(true)
                    send_image({byte_image:b64Image}, function({malignant, benign}, err){
                      if (err==null){
                        setLoading(false)
                          setMalignant(malignant)
                          setBenign(benign)
                      }else{
                        setLoading(false)
                          message("Дахин оролдоно уу")
                          console.log("Error", err)
                      }
                  })
                  }}
                />
            </>
        }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    borderRadius:10,
    width: 300,
    height: 300,
    marginVertical:10,
    borderStyle:"dashed",
    borderWidth:1,
    borderColor:"black",
  },
  button:{
    borderWidth:1,
    borderColor:"black",
  }
});
