import React, { component, Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet,TextInput,TouchableOpacity, Image, Button, ImageBackground } from 'react-native'


export default function App() {
    const [nombre, setNombre] = useState ('Nombre');
    const [apellido, setApellido] = useState ('Apellido');
    
    const cambioNombre =()=>{
        setNombre('Pepe')
    }
    const cambioApellido =()=>{
        setApellido('La llama')
    }
    
    
        return (

            <View style={styles.container} >
                <View style={styles.columnauno} >

                    <View style={styles.primero}>
                    <View style={styles.primerouno}>
                        <View style={styles.primerouno}>
                            <Text>
                                holi
                </Text>
                        </View>
                        <View style={styles.primerounouno}>
                            <Text>
                                holi
                </Text>
                        </View>
                        </View>
                        <View style={styles.primerodos}>
                        <View style={styles.primerodos}>
                            <Text>
                                holi dos
                </Text>
                        </View>
                        <View style={styles.primerodosdos}>
                            <Text>
                                holi dos
                </Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.segundo} >
                        <Text>
                            que emocion
                </Text>
                    </View>
                </View>
                <View style={styles.columnados} >
                    <View style={styles.tercero}>
                    <Text> El Nombre digitado es: {nombre}.
                    El apellido digitado es: {apellido}</Text>
                        
                    </View>
                    <View style={styles.cuarto} >
                    <TextInput
          placeholder='Ingrese Nombre'
          style = {styles.inputext}
          onChangeText = {(val) => setNombre (val)}
          />
                  <TextInput
          placeholder='Ingrese Apellido'
          style = {styles.inputext}
          onChangeText = {(val) => setApellido (val)}
          />
            
          <Button title='Actualizar Apellido' onPress={cambioApellido} />
          <Button title='Actualizar Nombre' onPress={cambioNombre} />
                    </View>
                </View>
                <View style={styles.columnatres} >
                    <View style={styles.quinto}>
                        <Text>
                            que emocion
                </Text>
                    </View>
                    <View style={styles.sexto} >
                        <Text>
                            que emocion
                </Text>
                    </View>
                </View>

            </View>

        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',


    },
    columnauno: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',

    },
    inputext:{
        margin: 15,
        height: 40,
        borderColor: 'gray',
        textAlign: "center",
        
        backgroundColor: 'white',
        borderWidth: 1
    },
    primero: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'orange',

    },
    primerouno: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'violet',

    },
    primerounouno: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',

    },
    primerodos: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',

    },
    primerodosdos: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',

    },

    segundo: {
        flex: 1,

        backgroundColor: 'green',

    },
    tercero: {
        flex: 1,

        backgroundColor: 'white',

    },
    cuarto: {
        flex: 1,

        backgroundColor: 'orange',

    },
    quinto: {
        flex: 1,

        backgroundColor: 'yellow',

    },
    sexto: {
        flex: 1,

        backgroundColor: 'blue',

    },
    columnados: {
        flex: 2,
        flexDirection: 'row',
        

    },
    columnatres: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',

    },

})

