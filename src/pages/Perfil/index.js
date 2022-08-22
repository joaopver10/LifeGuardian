import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

import {
  Container,
  Nome,
  Logout,
  LogoutTexto,
  Button,
  ButtonText,
} from './styles';
import { AutenticaContext } from '../../context/autentica';
import Header from '../../components/Header';

export default function Perfil() {
  const { user, deslogando } = useContext(AutenticaContext);
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        alert('Nós precisamos dessa permissão.');
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append('avatar', {
      uri: avatar.uri,
      type: avatar.type,
    });

    await axios.post('http://localhost/api/file-upload', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
  }).then(res => {
      setPhoto(res.data.photo.photo);
  }).catch(err => {
      console.log(err.response);
  });
  }

  return (
    <View style={styles.container}>
      <Header />
      <Nome>{user && user.nome}</Nome>
      <Image
        source={
          avatar ? { uri: avatar.uri } : require('./../../images/user.png')
        }
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
});
