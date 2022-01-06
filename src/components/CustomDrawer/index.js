import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { AutenticaContext } from '../../context/autentica'

export default function CustomDrawer(props) {
    const { user, deslogando } = useContext(AutenticaContext)
    return (
        <DrawerContentScrollView {...props} o>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image source={require('../../../assets/user.png')}
                    style={{ width: 85, height: 85 }}
                    resizeMode="contain"
                />
                <Text style={{ color: '#FFF', fontSize: 18, marginTop: 5 }}>Bem-vindo</Text>
                <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25 }}>
                    {user && user.nome}</Text>
            </View>

            <DrawerItemList {...props} />
            
                <DrawerItem 
                    {...props}
                    label="Sair do app"
                    inactiveBackgroundColor="#c62c36"
                    onPress={() => deslogando()}
                    labelStyle={{color:'#FFF',          
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginRight: -23,
                    fontSize: 15}}

                />

                

        </DrawerContentScrollView>
    )
}

