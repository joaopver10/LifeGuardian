import React, { useContext } from 'react'
import {View, ActivityIndicator } from 'react-native'
import AppRotas from './approta'
import AutenticaRotas from './autenticarotas'
import {AutenticaContext} from '../context/autentica'

export default function Rotas(){
    const {signed, load} = useContext(AutenticaContext)

    if(load){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#131313'/>
            </View>
        )
    }
    
    return(
        signed ? <AppRotas/>  : <AutenticaRotas/> 
    )
}