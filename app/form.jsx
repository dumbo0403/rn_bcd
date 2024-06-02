import { StatusBar } from "expo-status-bar";
import {FlatList, TextInput, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import QCard from "../components/QCard";
import { useGlobalContext } from "../ctx/GlobalProvider";
import { router } from "expo-router";
import { useContext, useState } from "react";

export default function(){

    const {point, message, setPoint} = useGlobalContext()

    const [age, setAge] = useState()

    const data=[
        'Сарын тэмдэг эрт ирсэн ирсэн эсэх /12 наснаас өмнө /',
        'Орой цэвэршсэн эсэх/55 наснаас хойш /',
        'Үр хөндөлт хийлгэж байсан эсэх',
        'Хүүхдээ хөхөөрөө хооллохгүй байж байсан эсэх',
        'Химийн гаралтай, лаазалсан, хадгалах хугацааг уртгасан хоол хүнсийг түлхүү хэрэглэдэг эсэх',
        'Таны бодлоор амьдралын тань хэв маяг буруу санагддаг эсэх',
        'Жирэмсэлтээс хамгаалах аргууд хэрэглэж байсан эсэх',
        'Таны ойрын хамаатан садан болон гэр бүлийхэн дунд өмнө хөхний хорт хавдраар оншлогдож байсан хүн байгаа эсэх',
        'Орой төрсөн эсэх/Анхны хүүхдээ 30-аас дээш төрүүлсэн эсэх/',
        'Огт жирэмсэлж байгаагүй эсэх',
        'Согтууруулах ундаа хэтрүүлэн хэрэглэх',
        'Таргалалттай эсэх',
        'Цацраг туяаны эмчилгээ хийлгэж байсан эсэх',
        'Хөхний гүнд эсвэл дөнгөж арьсан доор өвчингүй бэрсүү үүссэн эсэх',
        'Хэрэв бэрсүү үүссэн бол бэрсүүний хэсгийн арьс хонхойсон эсвэл арьс жүржийн хальс мэт харагдаж хавдсан эсэх',
        'Суганд зангилаа үүссэн эсэх',
        'Хөхний хэлбэр хэмжээ өөрчлөгдсөн эсэх ',
        'Хөхөн дээр тууралт үүссэн эсэх',
        'Хөхний толгой татагдсан эсэх',
        'Хөхний толгойноос цустай ялгадас гарах шинж тэмдэг илэрсэн эсэх'
      ];


    return(
        <>
        <SafeAreaView style={{flex:1}}>
            <View style={styles.buttonContainer}>
                <TextInput value={age} onChangeText={(e)=>{setAge(e)}} inputMode="numeric" placeholder="Таны нас"/>
            </View>
            <FlatList
                data={data}
                renderItem={(item)=>{
                    return(<QCard item={item.item} index={item.index}/>)
                }
            }
            />
            <View style={styles.buttonContainer}>
                <Button
                    onPress={()=>{
                        let sum = point.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue;
                          }, 0);
                        sum += (age - 35) * 0.1
                        if(sum>=10){
                            message(`Таны оноо:${sum}%\n\nУучлаарай та эрүүл мэндийн байгууллагад хандаж үзээрэй`)
                        }else{
                            message(`Таны оноо:${sum}%\n\nТаны эрүүл мэндийн өгөгдөл хэвийн гэсэн үр дүн өглөө`)
                        }
                        setPoint([])
                        router.back()
                    }}
                >Дуусгах</Button>
            </View>
        </SafeAreaView>
        </>
    )    
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      borderWidth:1
    },
    item: {
      flexDirection:"row",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    title: {
      fontSize: 32,
    },
  });