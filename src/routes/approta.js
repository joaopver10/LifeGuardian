import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Inicio from '../Pages/Inicio'

const AppStack = createStackNavigator()

export default function AppRotas() {
    return (
        <AppStack.Navigator >
          <AppStack.Screen name='Inicio' component={Inicio} options={{headerShown: false }} />
        </AppStack.Navigator>
    );
  }
