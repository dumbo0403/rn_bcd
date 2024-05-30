import { createContext, useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import Loader from "../components/Loader";
import { Snackbar } from "react-native-paper";

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
        }, 1000)
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
            <Snackbar visible={snackVisible}>
                {snackMessage}
            </Snackbar>
        </GlobalContext.Provider>
    )
}

export default GlobalProvider