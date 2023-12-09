import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AppLoading from 'expo-app-loading';

import { Card, ListItem, Button, Icon } from 'react-native-elements';

import { useFonts, TitanOne_400Regular } from '@expo-google-fonts/dev';

import React, { useState, useEffect } from 'react';

import Firebase from './FireBase';

export default function Acesso({ navigation }) {
  let [fontsLoaded] = useFonts({
    TitanOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.logo}>
          <Image
            style={styles.logotipo}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.titulo}>Paws</Text>
        </SafeAreaView>
        <Text style={styles.texto}>Contate um doador!</Text>

        <SafeAreaView style={styles.cartao}>
          <Text style={styles.titulo}>Arthur</Text>
          <Image
            style={styles.imagem}
            source={require('../assets/cachorro.png')}
          />
          <Text style={styles.texto}>Arthur é um cachorro legal.</Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.texto}>Contatar doador</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.cartao}>
          <Text style={styles.titulo}>Lúcio</Text>
          <Image style={styles.imagem} source={require('../assets/gato.png')} />
          <Text style={styles.texto}>Lúcio é um gato estranho.</Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.texto}>Contatar doador</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.cartao}>
          <Text style={styles.titulo}>Jorge</Text>
          <Image
            style={styles.imagem}
            source={require('../assets/coelho.png')}
          />
          <Text style={styles.texto}>
            Jorge é um coelho carismático.
          </Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.texto}>Contatar doador</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCFF',
    padding: 10,
  },
  logo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  titulo: {
    margin: 10,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFE338',
    fontFamily: 'TitanOne_400Regular',
  },
  logotipo: {
    width: 50,
    height: 50,
  },
  input: {
    textAlign: 'center',
    borderStyle: 'dotted',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginHorizontal: 30,
  },
  botao: {
    backgroundColor: '#FFE338',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 10,
    padding: 5,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
  },
  imagem: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 20,
    margin: 10,
  },
  cartao: {
    margin: 10,
    backgroundColor: '#FBFBFB',
    borderRadius: '20',
  },
});
