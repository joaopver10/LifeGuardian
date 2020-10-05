import 'react-native-gesture-handler'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import TelaPrincipal from '../pages/TelaPrincipal'

const AppStack = createStackNavigator()

export default function AppRotas() {
    return (
        <AppStack.Navigator >
          <AppStack.Screen name='TelaPrincipal' component={TelaPrincipal}/>
        </AppStack.Navigator>
    );
  }
