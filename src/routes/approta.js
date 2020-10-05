import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaPrincipal from '../pages/TelaPrincipal'

const AppDrawer= createDrawerNavigator()

export default function AppRotas() {
    return (
        <AppDrawer.Navigator >
          <AppDrawer.Screen name='TelaPrincipal' component={TelaPrincipal}/>
        </AppDrawer.Navigator>
    );
  }
