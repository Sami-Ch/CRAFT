import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';

const Name = ({ navigation }) => {
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
            <Text style={styles.text_join}>Dashboard</Text>
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
   },
});

export default Name;
