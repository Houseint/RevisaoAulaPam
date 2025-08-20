import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
        <Image 
          source={require('../image/casual_dog.png')} 
          style={styles.image} 
        />

      <Text style={styles.greeting}>Ótimo dia!</Text>
      <Text style={styles.question}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.buttonGoogle} onPress={()=>navigation.navigate('login')}>
        <Text style={styles.buttonText}>Continuar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOptions}>
        <Text style={styles.buttonText}>Outras opções</Text>
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
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonGoogle: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
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
});

export default Loading;


