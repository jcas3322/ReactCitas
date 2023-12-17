import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import {
    Modal,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    Alert,
} from 'react-native';

const Formulario = (props) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    const { modalVisible, cambiarFalso, setPacientes, pacientes } = props

    const handleCita = () => {
        //Validaciones
        if ([paciente, propietario, email, fecha, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas,
        }

        setPacientes([...pacientes, nuevoPaciente])
        cambiarFalso(false)
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date)
        setSintomas('')
    }

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}<Text style={styles.tituloBold}>Cita</Text></Text>
                    <Pressable style={styles.btnCancelar} onLongPress={cambiarFalso}>
                        <Text style={styles.btnCancelarTexto}>
                            Cancelar
                        </Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput style={styles.inputs} placeholderTextColor={'#666'} placeholder='Nombre del paciente'
                            value={paciente} onChangeText={setPaciente} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del propietario</Text>
                        <TextInput style={styles.inputs} placeholderTextColor={'#666'} placeholder='Nombre del propietario'
                            value={propietario} onChangeText={setPropietario} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del propietario</Text>
                        <TextInput keyboardType='email-address' style={styles.inputs} placeholderTextColor={'#666'} placeholder='Email del propietario'
                            value={email} onChangeText={setEmail} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha de Alta</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fecha}
                                onDateChange={setFecha}
                                locale='es'
                            />
                        </View>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono del propietario</Text>
                        <TextInput keyboardType='number-pad' style={styles.inputs} placeholderTextColor={'#666'} placeholder='Telefono del propietario'
                            value={telefono} onChangeText={setTelefono} maxLength={8} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput style={[styles.inputs, styles.sintomasInput]} placeholderTextColor={'#666'} placeholder='Sintomas paciente'
                            value={sintomas} onChangeText={setSintomas} multiline={true} numberOfLines={4} />
                    </View>
                    <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto}>
                            Agregar Paciente
                        </Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#f59e0b',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#5827a4',
        fontSize: 20,
    },
    btnCancelar: {
        marginTop: 20,
        backgroundColor: '#5827a4',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10,

    },
    sintomasInput: {
        height: 100,

    },
    inputs: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,

    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,

    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    contenido: {
        backgroundColor: '#6d28d9',
        flex: 1,
    },
    titulo: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
    },
    tituloBold: {
        fontWeight: '900',
    }
})

export default Formulario