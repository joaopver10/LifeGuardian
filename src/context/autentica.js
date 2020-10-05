import React, { createContext, useState } from 'react'
import firebase from '../services/firebaseConection'

export const AutenticaContext = createContext({})


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    async function cadUsuario(email,senha, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(async (value) =>{
            let uid = value.user.uid
            await firebase.database().ref('usuarios').child(uid).set({
                nome: nome
            })
            .then( () =>{
                let data ={
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                }
                setUser(data)
            })
        })
    }
    return (

        <AutenticaContext.Provider value={{ signed: !!user, user, cadUsuario}}>
            {children}
        </AutenticaContext.Provider>
    )
}