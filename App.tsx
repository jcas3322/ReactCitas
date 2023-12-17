
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
  FlatList,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = (): React.JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  function cambiarEstado() {
    setModalVisible(true)
  }
  function cambiarFalso() {
    setModalVisible(false)
  }


  /*Este codigo es un ejemplo de como podria funcionar el flatList desde esta instancia
    const Item = (props: any) => {
      const { paciente } = props
      return (
        <View>
          <Text>{paciente}</Text>
        </View>
      )
    }*/


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Hola Mundo
        <Text style={styles.tituloBold}>Otro Titulo</Text>
      </Text>
      <Pressable style={styles.boton} onPress={cambiarEstado}>
        <Text style={styles.btnTextoBoton}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No hay pacientes aun</Text> :

        /*Este codigo se complementa con el codigo de arriba, es decir, de como podria
        funcionar un flatList desde esta instancia
        <FlatList
          data={pacientes}
          renderItem={(pppp) => {
            const { item } = pppp
            return (
              <Item paciente={item.paciente} />
            )
          }
          }
          keyExtractor={(elemento: any) => elemento.id}
        />*/

        //Continua codigo de la condicion ternaria de arriba
      }

      <Formulario modalVisible={modalVisible} cambiarFalso={cambiarFalso} setPacientes={setPacientes} pacientes={pacientes} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '700'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d2869',
  },
  btnTextoBoton: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  boton: {
    padding: 15,
    backgroundColor: '#6d28d9',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  }
})

export default App;
