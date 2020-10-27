import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps'

import { Background, TextNome } from './styles'
import Header from '../../components/Header'

export default function TelaPrincipal() {
    const [mapa, setMapa] = useState(null)

    useEffect(() => {
        async function pegaLocal() {
            await navigator.geolocation.getCurrentPosition(
                async ({ coords: { latitude, longitude } }) => {
                    setMapa({
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    })
                },
                {
                    timeout: 2000,
                    maximumAge: 1000,
                }

            )
        }
        pegaLocal()
    }, [])

    return (
        <Background>
            <Header />
            <TextNome>Sua Localização em tempo real</TextNome>

            <MapView
                style={{ width: 360, height: 400, marginTop: 10 }}
                region={mapa}
                showsUserLocation
                loadingEnabled
                minZoomLevel={18}
                rotateEnabled={true}
            />
        </Background>
    )
}