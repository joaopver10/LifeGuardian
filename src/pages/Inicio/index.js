import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Inicio() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 175 }))
    const [opacity] = useState(new Animated.Value(0))

    const navigation = useNavigation()

function Cadastrar(){
    navigation.navigate('Cadastro')
}
function Entrar(){
    navigation.navigate('Login')
}

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset,{
                toValue: 0,
                speed: 2,
                bounciness: 25,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false
            })
        ]).start()
    })


    return (
        <View style={styles.container}>
            <Animated.View style={{transform:[{translateY: offset.y}], opacity: opacity }}>
                <View View style={styles.imgText}>

                    <Image source={require('../../images/police.png')} style={styles.img} />

                    <Text style={styles.texto}>LifeGuardian</Text>

                </View>

                <View style={styles.btnArea}>

                    <TouchableOpacity style={styles.btnB} onPress={Entrar} >
                        <Text style={styles.textoB} > Já possui conta?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnB} onPress={Cadastrar}>
                        <Text style={styles.textoB} > Se cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </Animated.View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0CB7F5',
        alignItems: 'center',
        justifyContent: 'center',

    },

    imgText: {
        width: 400,
        alignItems: 'center'
    },
    img: {
        width: 270,
        height: 270,
    },
    texto: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#7EFC58',
        fontStyle: 'italic',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textShadowColor: 'black'
    },
    btnArea: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    btnB: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#6855F2',
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10
    },
    textoB: {
        fontSize: 15,
        fontWeight: 'bold',

    }
})