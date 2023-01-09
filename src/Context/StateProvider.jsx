import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const GlobalVariables = createContext()
function StateProvider({ children }) {
    const Token = localStorage.getItem('token');
    let TokenData;
    if (Token) {
         TokenData = JSON.parse(Token);
         console.log(TokenData , 'statePro')
    }
    const [type, setType] = useState('')
    const [Lmore, setLmore] = useState(1)
    const [ProfileUpdate, setProfileUpdate] = useState(1)
    const [TotalPagess, setTotalPagess] = useState('');
    const [HomeData, setHomeData] = useState();
    const [Longitude, setLongitude] = useState("");
    const [latitude, setlatitude] = useState("");
    const [isOpenDownload, setisOpenDownload] = useState(false)
    const [UserId, setUserId] = useState(TokenData?.token);
    return (
        <>
            <GlobalVariables.Provider value={{
            isOpenDownload, setisOpenDownload ,
                ProfileUpdate, setProfileUpdate,
                type, setType,
                Lmore, setLmore,
                latitude, setlatitude,
                Longitude, setLongitude,
                HomeData, setHomeData,
                TotalPagess, setTotalPagess,
                UserId, setUserId
            }}>
                {children}
            </GlobalVariables.Provider>
        </>
    )
}

export default StateProvider
