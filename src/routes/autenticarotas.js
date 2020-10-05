import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import  Login from '../Pages/Login'
import  Cadastro from '../Pages/Cadastro'

const AutenticaStack = createStackNavigator()

export default function AutenticaRotas() {
    return (
        <AutenticaStack.Navigator >
          <AutenticaStack.Screen name='Login' component={Login} options={{headerStyle:{backgroundColor: '#0CB7F5' }}}/>
          <AutenticaStack.Screen name='Cadastro' component={Cadastro} options={{headerStyle:{backgroundColor: '#0CB7F5'}}} />
        </AutenticaStack.Navigator>
    );
  }

