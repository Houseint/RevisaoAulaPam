import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

const Login = ({navigation}) => {
  const[isChecked, setChecked]= useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.backButton}
             onPress={() => navigation.goBack()}
             >
          <Text style={styles.backButtonText}>&lt;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>com E-mail e senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput  
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <View style={styles.row}>
        <View style={styles.selecao}>
        <Checkbox style={styles.selection}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined
        }>
        
        </Checkbox>
        <TouchableOpacity>
          <Text style={styles.checkboxLabel}>Lembrar senha</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.espaco}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.outlineButton]}>
        <Text style={styles.buttonOutlineText}>Cadastrar</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Ou continue com</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../image/Google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../image/Facebook.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selecao:{
    display: 'flex',
    flexDirection: 'row'
  },
  backButton: {
   marginTop: 40,
   height: '2%'
  },
  backButtonText:{
    height: 90
  },
  espaco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container:
   { flex: 1,
     padding: 20,
      backgroundColor: '#FFFFFF'
     },
  title:
   {
    marginTop: 50,
     fontSize: 24, 
    fontWeight: 'bold' 
  },
  subtitle:
   {
     fontSize: 16,
     marginVertical: 10
     },
  label:
   { 
    marginTop: 15,
     fontSize: 14 
    },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#dbdbdb'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  checkboxLabel: {
     fontSize: 14, 
     borderRadius: 10,
     flexDirection: 'row',
     paddingLeft: 11
    },
  forgotPassword: 
  { fontSize: 14,
     color: '#007BFF'
     },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    width: 180
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#28A745',
    borderWidth: 1,
  },
  buttonText: { color: '#FFFFFF', textAlign: 'center', fontSize: 16 },
  buttonOutlineText: {
    color: '#28A745',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: { marginTop: 20, textAlign: 'center', fontSize: 14 },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialButton: { margin: 10 },
  icon: { width: 30, height: 30, resizeMode: 'contain' },
});

export default Login;