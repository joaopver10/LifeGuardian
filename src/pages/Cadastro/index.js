import React from 'react'
import { View, StyleSheet, TextInput, Keyboard, TouchableOpacity, Text, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'




export default function Cadastro({route}) {
  

    return (
        <View style={styles.container}>
            <View style={styles.areaC}>
                <Image style={styles.img} source={require('../../images/police.png')} />
                <Text style={styles.textoTitulo}> LifeGuardian </Text>
            </View>

            <View style={styles.input}>
                <Text style={styles.texto}> E-mail: </Text>

                <TextInput placeholder='Digite seu e-mail'
                    style={styles.caixa1} underlineColorAndroid='transparent' />

                <Text style={styles.texto}>Senha: </Text>

                <TextInput placeholder='Digite sua senha'
                    underlineColorAndroid='transparent'
                    keyboardType='numeric'
                    style={styles.caixa2} />

                <Text style={styles.textoCad}>Confirme sua senha: </Text>

                <TextInput placeholder='Digite sua senha novamente'
                    underlineColorAndroid='transparent'
                    keyboardType='numeric'
                    style={styles.caixa2} />

                <View style={styles.btnArea}>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoB}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.centro}></View>
            <View style={{ backgroundColor: '#0CB7F5', height: 220, width: 400, marginTop: 80 }} ></View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaC: {
        width: 400,
        height: 200,
        backgroundColor: '#0CB7F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoTitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#7EFC58',
        fontStyle: 'italic',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textShadowColor: 'black'
    },
    centro: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    input: {
        marginTop: 50,
    },
    img: {
        marginTop: 50,
        width: 90,
        height: 90,
    },
    caixa1: {
        borderWidth: 1,
        height: 45,
        padding: 10,
        width: 260,
        borderColor: 'gray',
        borderRadius: 3
    },
    caixa2: {
        borderWidth: 1,
        height: 45,
        padding: 10,
        width: 260,
        borderColor: 'gray',
        marginBottom: 15,
        borderRadius: 3
    },
    texto: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoCad: {

        fontSize: 16,
        fontWeight: 'bold',
    },
    btnArea: {
        padding: 10,
        alignItems: 'center'
    },
    botao: {
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#6855F2',
        alignItems: 'center',
        width: 160

    },
    voltarLogin:{
        marginTop: 35,
        marginBottom: -15 ,
        fontWeight: 'bold',
        fontSize: 15,
    },
    textoB:{
        fontSize: 16,
        fontWeight: 'bold',
      }

});
