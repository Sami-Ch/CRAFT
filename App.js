import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import CreateAccount from './src/signup/CreateAccount';
import Name from './src/signup/Name';
import Email from './src/signup/Email';
import ConfirmationCode from './src/signup/ConfirmationCode';
import dashboard from './src/buyer/dashboard';
import email from './src/forgetPassword/email';
import verifyCode from './src/forgetPassword/verifyCode';
import password from './src/forgetPassword/password';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CRAFT" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="email" component={email} />
        <Stack.Screen name="verifyCode" component={verifyCode} />
        <Stack.Screen name="password" component={password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
