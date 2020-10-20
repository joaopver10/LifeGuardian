import React, { useContext } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaPrincipal from '../pages/TelaPrincipal'
import Perfil from '../pages/Perfil'
import CustomDrawer from '../components/CustomDrawer'

const AppDrawer= createDrawerNavigator()

export default function AppRotas() {
    return (
        <AppDrawer.Navigator
        drawerContent={ (props) => <CustomDrawer {...props}/>}
         drawerStyle={{
          backgroundColor: '#0798CC'
          
        }}
        drawerContentOptions={{
          
          labelStyle:{
            fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: -23,
            fontSize: 15
          },
          activeTintColor: '#FFF',
          activeBackgroundColor: '#4D3FAE',
          inactiveBackgroundColor: '#5942FF',
          inactiveTintColor: '#DDD',
          itemStyle: {
            marginVertical: 5,
        },
        
        }}
        >
          <AppDrawer.Screen name='Início' component={TelaPrincipal}/>
          <AppDrawer.Screen name='Perfil' component={Perfil} />
        </AppDrawer.Navigator>
    );
  }
