import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AppLoading from 'expo-app-loading';

import { useFonts, TitanOne_400Regular } from '@expo-google-fonts/dev';

import React, { useState, useEffect } from 'react';

import Firebase from './FireBase';

export default function Acesso({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function dados(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function logar() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        if (user) {
          alert('Usuario não existe');
          return;
        }
        navigation.navigate('Home', { email });
      })
      .catch((error) => {
        alert(error);
        navigation.navigate('Acesso');
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function (user) {
      const uid = user.uid;
      const email = user.email;
    });
  }, []);

  let [fontsLoaded] = useFonts({
    TitanOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.logo}>
          <Image style={styles.logotipo} source={require('../assets/logo.png')} />
          <Text style={styles.titulo}>Paws</Text>
        </SafeAreaView>
        <Text style={styles.texto}>Acesse sua conta</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          placeholder="Digite o E-mail"
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          onChangeText={(senha) => setSenha(senha)}
          value={senha}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            logar();
          }}>
          <Text style={styles.texto}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.texto}>Registrar</Text>
        </TouchableOpacity>
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
    alignSelf: 'center'
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
});
