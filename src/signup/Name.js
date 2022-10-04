import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Name = ({navigation}) => {
  const [firstName, setfirstName] = useState('');
  const [surName, setsurName] = useState('');
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.image}>
        <Text style={styles.text_join}>What's your name?</Text>
        <Text style={styles.text_join1}>Enter the name you use in real.</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor="black"
            onChangeText={firstName => setfirstName(firstName)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Surname"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={surName => setsurName(surName)}
          />
        </View>

        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => navigation.navigate('Email')}>
          <Text style={styles.NextText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  text_join: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_join1: {
    marginBottom: 30,
  },
  NextButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'black',
  },
  NextText: {
    color: 'white',
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    marginLeft: 20,
    color: 'black',
  },
});

export default Name;
