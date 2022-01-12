import React, { useRef,useContext } from 'react'
import {View, Button, Keyboard, Alert} from 'react-native'
import {Form} from '@unform/mobile'
import Header from '../../components/Header'
import Input from '../../components/Form/Input'
import *  as Yup from 'yup'
import {AutenticaContext} from '../../context/autentica'
import email from 'react-native-email'


export default function EntrarEmContato() {
    const formRef = useRef(null);
    const {user} = useContext(AutenticaContext)

    const initialData = {
        name: user && user.nome,
        email: user && user.email
    }

   
    async function handleSubmit(data, {reset}) {
        try{
        const schema = Yup.object().shape({
            name: Yup.string().required('O nome é obrigátorio'),
            email: Yup.string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
            text: Yup.string().required('O campo esta vázio')
        })
        await schema.validate(data,{
            abortEarly: false
        })
        
        reset()
        Keyboard.dismiss()
        Alert.alert('Sua menssagem foi enviada com sucesso') 
        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })
                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return(
        <View>
            <Header/>
        
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Nome"/>
                <Input name="email" type="email" placeholder="Email"/>
                <Input name="text" type="text"  multiline={true}  numberOfLines={6} style={{      
                borderWidth: 1,             
                padding: 10,
                width: '65%',
                borderColor: 'gray',
                marginBottom: 15,
                borderRadius: 3,
                alignSelf:'center',
                textAlignVertical:'top',
                }}/>
                <Button title="Enviar" onPress={() => formRef.current.submitForm() } />
            </Form>
        </View>
         
    )
}
