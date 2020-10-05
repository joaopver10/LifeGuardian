import 'react-native-gesture-handler'
import React, { useContext } from 'react'
import AppRotas from './approta'
import AutenticaRotas from './autenticarotas'
import {AutenticaContext} from '../context/autentica'

export default function Rotas(){
    const {signed} = useContext(AutenticaContext)
    
    return(
        signed ? <AppRotas/>  : <AutenticaRotas/> 
    )
}