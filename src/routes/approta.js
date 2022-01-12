import React, { useContext } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaPrincipal from '../pages/TelaPrincipal'
import Perfil from '../pages/Perfil'
import CustomDrawer from '../components/CustomDrawer'
import EntrarEmContato from '../pages/Formulario/index'

const AppDrawer= createDrawerNavigator()

export default function AppRotas() {
    return (
        <AppDrawer.Navigator
        drawerContent={ (props) => <CustomDrawer {...props}/>}
          screenOptions={{
          drawerStyle:{
            backgroundColor: '#0798CC',
            },
            drawerLabelStyle:{
              fontWeight: 'bold',
              alignSelf: 'center',
              marginRight: -23,
              fontSize: 15
            },
            drawerActiveTintColor: '#FFF',
            drawerActiveBackgroundColor: '#4D3FAE',
            drawerInactiveBackgroundColor: '#5942FF',
            drawerInactiveTintColor: '#DDD',
            
            drawerItemStyle: {
              marginVertical: 5,
            }
           
        }}>
          <AppDrawer.Screen name='Início' component={TelaPrincipal} options={{ headerShown: false }} />
          <AppDrawer.Screen name='Perfil' component={Perfil} options={{ headerShown: false }}/>
          <AppDrawer.Screen name='Contate-nos' component={EntrarEmContato}options={{ headerShown: false }}/>
        </AppDrawer.Navigator>
  );
}
