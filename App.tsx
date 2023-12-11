
import React, { useState } from 'react';
import {
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Modal,
} from 'react-native';

const App = ():React.JSX.Element =>{
  const [modalVisible, setModalVisible] = useState(false)
  function cambiarEstado(){
    setModalVisible(true)
  }
  function cambiarFalso(){
    setModalVisible(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Hola Mundo
        <Text style={styles.tituloBold}>Otro Titulo</Text>
      </Text>
      <Pressable style={styles.boton} onPress={cambiarEstado}>
        <Text style={styles.btnTextoBoton}>Nueva Cita</Text>
      </Pressable>
      <Modal animationType='slide' visible={modalVisible}>
        <SafeAreaView>
        <Text>Desde Modal</Text>
        <Button title='Click' onPress={cambiarFalso}></Button>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f3f4f6',
    flex:1,
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'700'
  },
  tituloBold:{
    fontWeight:'900',
    color:'#6d2869',
  },
  btnTextoBoton:{
    textAlign:'center',
    color:'#FFF',
    fontSize:20,
    fontWeight:'900',
    textTransform:'uppercase',
  },
  boton:{
    padding:15,
    backgroundColor:'#6d28d9',
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
  }
})

export default App;
