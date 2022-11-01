import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const GlobalVariables = createContext()
function StateProvider({ children }) {
    const [type, setType] = useState('')
    return (
        <>
            <GlobalVariables.Provider value={{type, setType}}>
                {children}
            </GlobalVariables.Provider>
        </>
    )
}

export default StateProvider
