import React, { useState, useEffect } from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Firebase from './FireBase';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function cadastrar() {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Atenção', 'Dados cadastrados com sucesso. Faça Login..');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          Alert.alert('Atenção', 'Este e-mail já tem cadastro.');
        } else if (errorCode == 'auth/weak-password') {
          Alert.alert('Senha', 'Deve ter no mínimo 6 caracteres.');
        } else if (errorCode == 'auth/invalid-email') {
          Alert.alert('E-mail', 'Este Email é invalido.');
        }
        Alert.alert(errorCode);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.logo}>
        <Image style={styles.logotipo} source={require('../assets/logo.png')} />
        <Text style={styles.titulo}>Paws</Text>
      </SafeAreaView>
      <Text style={styles.texto}>Cadastre seus Dados</Text>

      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        placeholder="Digite o E-mail"
        value={email}
        required
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        secureTextEntry={true}
        required
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          cadastrar();
          navigation.navigate('Acesso');
        }}>
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Acesso')}>
        <Text style={styles.texto}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
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
});
