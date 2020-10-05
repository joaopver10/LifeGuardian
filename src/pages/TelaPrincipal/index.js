import React,{useContext} from 'react'
import {View, StyleSheet, Text, TouchableOpacity,Button} from 'react-native'
import {AutenticaContext} from '../../context/autentica'

export default function TelaPrincipal(){
    const{user, deslogando} = useContext(AutenticaContext)

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text> Seja Bem vindo!! </Text>
        <Button title='Sair da conta' onPress={ () => deslogando()} />
        </View>
    )
}