import React, {createContext, useState} from 'react'
import firebase from '../services/firebaseConection'

export const AutenticaContext = createContext({})
const [user, setUser] = useState(null)


export default function AuthProvider({children}){
    return(
        <AutenticaContext.Provider value={{ signed: !!user, user}}>
            {children}
        </AutenticaContext.Provider>
    )
}