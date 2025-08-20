import React from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet, Image } from 'react-native';

const login = () => {
  return (
    <View style={styles.container}>
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

      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.checkboxLabel}>Lembrar senha</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.outlineButton]}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  label: {
    marginTop: 15,
    fontSize: 14,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  forgotPassword: {
    marginLeft: 'auto',
    fontSize: 14,
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#28A745',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialButton: {
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default login;
