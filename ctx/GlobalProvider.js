import { createContext, useContext, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import Loader from "../components/Loader";
import { Modal, Snackbar } from "react-native-paper";

const GlobalContext = createContext()
export const useGlobalContext =()=> useContext(GlobalContext)

const GlobalProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [malignant, setMalignant] = useState(0)
    const [benign, setBenign] = useState(0)
    const [cancer, setCancer] = useState(0)
    const [snackMessage, setSnackMessage] = useState(null)
    const [snackVisible, setSnackVisible] = useState(false)
    const [point, setPoint] = useState([])
    const [ip, setIp] = useState()
    function message(message){
        setSnackMessage(message)
        setSnackVisible(true)
        setTimeout(()=>{
            setSnackVisible(false)
        }, 5000)
    }
    
    return(
        <GlobalContext.Provider
            value={{
                loading,
                setLoading,
                malignant, setMalignant,
                benign, setBenign,
                message, point,
                setPoint,
                cancer, setCancer,
                ip, setIp
            }}
        >
            {children}
            <Loader/>
            <Modal visible={snackVisible} style={{backgroundColor:"#e394d1", width:"70%", height:"30%", top:"25%", left:"15%",borderRadius:10,}}>
                <Text style={{fontSize:20, textAlign:"center", fontWeight:"bold"}}>
                {`Таны оноо:43%\n\nТаны эрүүл мэндийн өгөгдөл хэвийн гэсэн үр дүн өглөө`}
                </Text>
            </Modal>
        </GlobalContext.Provider>
    )
}

export default GlobalProvider