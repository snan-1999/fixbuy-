import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const GlobalVariables = createContext()
function StateProvider({ children }) {
    const Token= localStorage.getItem('token');
    const TokenData = JSON.parse(Token)
    const [type, setType] = useState('')
    const [Lmore, setLmore] = useState(1)
    const [TotalPagess, setTotalPagess] = useState('');
    const [HomeData, setHomeData] = useState();
    const [Longitude , setLongitude] = useState("");
    const [latitude , setlatitude] = useState("");
    // const [latitude, setlatitude] = useState(28.663996);
    // const [Longitude, setLongitude] = useState(77.306843);
    const [UserId, setUserId] = useState(TokenData?.token);
    return (
        <>
            <GlobalVariables.Provider value={{
                type, setType,
                Lmore, setLmore,
                latitude, setlatitude,
                Longitude, setLongitude,
                HomeData, setHomeData,
                TotalPagess, setTotalPagess ,
                UserId, setUserId
            }}>
                {children}
            </GlobalVariables.Provider>
        </>
    )
}

export default StateProvider
