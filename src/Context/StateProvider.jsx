import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const GlobalVariables = createContext()
function StateProvider({ children }) {
    const [type, setType] = useState('')
    const [Lmore, setLmore] = useState(1)
    const [latitude, setlatitude] = useState(28.663996)
    const [Longitude, setLongitude] = useState(77.306843)
    return (
        <>
            <GlobalVariables.Provider value={{
                type, setType,
                Lmore, setLmore,
                latitude, setlatitude,
                Longitude, setLongitude
            }}>
                {children}
            </GlobalVariables.Provider>
        </>
    )
}

export default StateProvider
