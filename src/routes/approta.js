import React, { useContext } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaPrincipal from '../pages/TelaPrincipal'
import Perfil from '../pages/Perfil'

const AppDrawer= createDrawerNavigator()

export default function AppRotas() {
    return (
        <AppDrawer.Navigator drawerStyle={{
          backgroundColor: '#0798CC'
        }}
        drawerContentOptions={{
          labelStyle:{
            fontWeight: 'bold'
          },
          activeTintColor: '#FFF',
          activeBackgroundColor: '#4D3FAE',
          inactiveBackgroundColor: '#5942FF',
          inactiveTintColor: '#DDD',
          itemStyle: {
            marginVertical: 5,
        }
        }}
        >
          <AppDrawer.Screen name='Início' component={TelaPrincipal}/>
          <AppDrawer.Screen name='Perfil' component={Perfil}/>
        </AppDrawer.Navigator>
    );
  }
