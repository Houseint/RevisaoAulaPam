import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Loading = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../image/casual_dog.png')} 
        style={styles.image} 
      />

      <Text style={styles.greeting}>Ótimo dia!</Text>
      <Text style={styles.question}>Como deseja acessar?</Text>

      <TouchableOpacity 
        style={styles.buttonGoogle} 
        onPress={() => navigation.navigate('Login')}
      >
        <Image 
          source={require('../image/Google.png')}
          style={styles.imggoogle}
        />
        <Text style={styles.buttonText}>Continuar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOptions}>
        <Text style={styles.buttonOptionsText}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonGoogle: {
   flexDirection: 'row',       
  alignItems: 'center',       
  justifyContent: 'flex-start',   
  backgroundColor: '#28A745',
  paddingVertical: 12,
  paddingHorizontal: 15,
  borderRadius: 8,
  width: '80%',
  marginBottom: 15,
  },
  buttonOptions: {
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonOptionsText: {
    color: '#333333',
    fontSize: 16,
  },
  imggoogle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    paddingRight: 2,
  }
});

export default Loading;