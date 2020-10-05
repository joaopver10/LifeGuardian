import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

const AutenticaStack = createStackNavigator()

export default function AutenticaRotas() {
  return (
    <AutenticaStack.Navigator>
      <AutenticaStack.Screen name='Inicio' component={Inicio} options={{ headerShown: false }} />
      <AutenticaStack.Screen name='Login' component={Login} options={{ headerStyle: { backgroundColor: '#0CB7F5' } }} />
      <AutenticaStack.Screen name='Cadastro' component={Cadastro} options={{ headerStyle: { backgroundColor: '#0CB7F5' } }} />
    </AutenticaStack.Navigator>
  );
}

