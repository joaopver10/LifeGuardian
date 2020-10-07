import React,{useContext} from 'react'
import {Container, Nome, Logout, LogoutTexto} from './styles'
import {AutenticaContext} from '../../context/autentica'


export default function Perfil(){
    const {user, deslogando} = useContext(AutenticaContext)
    return(
        <Container>
            <Nome>{user && user.nome}</Nome>

            <Logout onPress={ () => deslogando()}>    
                <LogoutTexto>Sair</LogoutTexto>
            </Logout>
        </Container>
    )
}

