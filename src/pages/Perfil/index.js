import React,{useContext} from 'react'
import {Container, Nome, Logout, LogoutTexto} from './styles'
import {AutenticaContext} from '../../context/autentica'
import Header from '../../components/Header'
export default function Perfil(){
    const {user, deslogando} = useContext(AutenticaContext)
    return(
        <Container>
            <Header/>
            <Nome>{user && user.nome}</Nome>

       
        </Container>
    )
}

