import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Email = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
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
        <Text style={styles.text_join}>What's your email adddress?</Text>
        <Text style={styles.text_join1}>
          Enter the email address you use in professional work.
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter email"
            placeholderTextColor="black"
            onChangeText={email => setemail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={password => setpassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            onChangeText={confirmPassword =>
              setconfirmPassword(confirmPassword)
            }
          />
        </View>

        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => navigation.navigate('ConfirmationCode')}>
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

export default Email;
