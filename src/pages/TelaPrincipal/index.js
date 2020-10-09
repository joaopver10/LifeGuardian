import React, { useContext } from 'react'
import { AutenticaContext } from '../../context/autentica'
import Header from '../../components/Header'
import {Background, TextNome} from './styles'

export default function TelaPrincipal() {
    const { user, deslogando } = useContext(AutenticaContext)

    return (
        <Background>
            <Header />
            <TextNome>{user && user.nome}</TextNome>
        </Background>
    )
}