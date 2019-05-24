import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert, ActivityIndicator } from 'react-native';

import { Input, Button, Image, Text, Header } from 'react-native-elements';


export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      location: '',
    }
  }

  validateData = () => {
    if (this.state.name.length <= 0 || this.state.location.length <= 0 || this.state.email.length <= 0) {
      Alert.alert(
        'Error',
        'Por favor complete el formulario',
        [
          { text: 'Aceptar' }
        ],
        { cancelable: false },
      );
      return false
    } else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.state.email))) {
      Alert.alert(
        'Error',
        'Por favor ingrese un correo válido',
        [
          { text: 'Aceptar' }
        ],
        { cancelable: false },
      );
      return false
    }
    return true
  }

  saveData = () => {
    if (this.validateData()) {
      Alert.alert(
        'Guardado',
        'Datos guardados satisfactoriamente',
        [
          { text: 'Aceptar' }
        ],
        { cancelable: false },
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <Header
            leftComponent={{ icon: 'menu', color: '#0310D6', size: 24 }}
            centerComponent={{ text: 'Perfil', style: { color: '#0310D6', fontSize: 15 } }}
            barStyle="light-content" 
            containerStyle={{
              backgroundColor: 'transparent',
              height: '5%'
            }}
        />
        <View style={{ marginTop: '15%' }}>
          <View>
            <Text h3 style={{ textAlign: 'center' }} >Datos personales</Text>
          </View>
          <View style={{ marginLeft: '9%', marginTop: '5%' }}>
            <Image
              source={{ uri: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png' }}
              style={styles.imageStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              placeholder='Nombre Completo'
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'at' }}
              onChangeText={(email) => this.setState({ email: email })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              placeholder='Ubicacion'
              leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
              onChangeText={(location) => this.setState({ location })}
            />
          </View>
          <View style={styles.viewButton}>
            <Button
              buttonStyle={styles.buttonStyle}
              title="GUARDAR"
              onPress={() => this.saveData()}
              loading={false}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: '1%'
  },
  inputContainer: {
    borderRadius: 15,
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    marginTop: '5%',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white'
  },
  imageStyle: {
    borderWidth: 1, 
    width: 200, 
    height: 200, 
    marginLeft: '15%', 
    borderRadius: 400 / 2,
    borderColor: '#83FFEE'
  },
  buttonStyle: {
    width: '60%', 
    marginLeft: '20%', 
    borderRadius: 10, 
    backgroundColor: '#09CFFE',
    height: '50%'
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  viewButton: {
    marginTop: '15%', 
    marginBottom: '10%'
  }
});