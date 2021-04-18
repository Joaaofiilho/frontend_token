import React, {useState} from 'react';
import axios from 'axios'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

interface AppProps {}

const App = (props: AppProps) => {
  const [user, setUser] = useState({})

  const registerUser = (user) => {
    axios.post('http://http://127.0.0.1:3000/api/register', user)
    .then((res) => {
      console.log(res)
    })
    .catch((reason) => {
      console.log(reason)
    })
    // fetch('http://localhost:3000/api/register', {
    //   method: 'POST',
    //   body: user
    // }).then((res) => {
    //   console.log('token: ', res.body)
    // }).catch((reason) => {
    //   console.log(reason)
    // })
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.inputs} value={user.username} autoCompleteType="email" onChangeText={(text) => {setUser({...user, username: text})}}/>
        <TextInput style={styles.inputs} value={user.password} secureTextEntry autoCompleteType="password" onChangeText={(text) => {setUser({...user, password: text})}}/>
        <TouchableOpacity disabled={user.username === undefined} onPress={() => {
          if(user.username !== undefined && user.password !== undefined) {
            registerUser(user)
          }
        }}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  inputs: {
    backgroundColor: '#5A5A5A',
    borderRadius: 8,
    padding: 8,
    marginTop: 12,
  },
});