import React, { useState, useEffect} from 'react'
import {Alert} from 'react-native'
import MapView from 'react-native-maps'
import { Background, TextNome, Container } from './styles'
import Header from '../../components/Header'
import * as Location from 'expo-location';


export default function TelaPrincipal() {
    const [mapa, setMapa] = useState(null)

  useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status == 'granted') {
              let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
              setMapa({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421   
              });
            }else{
                Alert.alert('Permissão para acessar a localização foi negado.');
            }
            return status
          })();
        }, []);
       

    return (
        <Background>
            <Header />
            <TextNome>Sua Localização em tempo real</TextNome>
                <MapView
                    style={{ width: '100%', height: "45%", alignSelf:'center'}}
                    initialRegion={mapa}
                    showsUserLocation
                    loadingEnabled
                    minZoomLevel={18}
                    rotateEnabled={true}

                />
        </Background>
    )
}
