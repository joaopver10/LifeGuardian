import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, ButtonMenu} from './styles'
import {useNavigation} from '@react-navigation/native'

export default function Header(){
    const navigation = useNavigation()
  return(
        <Container>
            <ButtonMenu onPress={ () => navigation.toggleDrawer()}>
                <Icon name="menu" color="#6855F2"  size={35}/>
            </ButtonMenu>
        </Container>
  )
}
