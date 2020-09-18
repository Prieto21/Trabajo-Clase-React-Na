import React, { component, Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
    const [nombre, setNombre] = useState('Nombre');
    const [calle, setCalle] = useState('Calle');
    const [calleNumero, setCalleNumero] = useState('CalleNumero');
    const [numero, setNumero] = useState('Numero');
    const [apellido, setApellido] = useState('Numero');
    const [barrio, setBarrio] = useState('Barrio');
    const [telefono, setTelefono] = useState('Numero de celllll');



    return (
<ScrollView>
        <View style={styles.container} >
            <Text style={styles.textos} >
                Seleccion de categoria
                </Text>
            <View style={styles.columnauno} >
            <Text>
                        Nombre
                </Text>
                <TextInput
                        placeholder='Ingrese Nombre'
                        style={styles.inputext}
                        onChangeText={(val) => setNombre(val)}
                    />
                    
                    <Text> El Nombre digitado es: {nombre}.
                    </Text>
            </View>
            <View style={styles.columnados} >
                <View style={styles.tercero}>

                <TextInput
                        placeholder='Calle'
                        style={styles.inputext}
                        onChangeText={(val) => setCalle(val)}
                    />
                    
                    <Text> Calle digitado es: {calle}.
                    </Text>
                    
                <TextInput
                        placeholder='#'
                        style={styles.inputext}
                        onChangeText={(val) => setNumero(val)}
                    />
                    
                    <Text> Calle digitado es: {numero}.
                    </Text>
                </View>
                <View style={styles.cuarto} >
                
                <TextInput
                        placeholder='Calle Tal'
                        style={styles.inputext}
                        onChangeText={(val) => setCalleNumero(val)}
                    />
                    
                    <Text> Calle digitado es: {calleNumero}.
                    </Text>
                    
                <TextInput
                        placeholder='#2'
                        style={styles.inputext}
                        onChangeText={(val) => setApellido(val)}
                    />
                    
                    <Text> Calle digitado es: {apellido}.
                    </Text>


                </View>
            </View>
            <View style={styles.columnauno} >
            
                <TextInput
                        placeholder='Ingrese Barriooooooo'
                        style={styles.inputext}
                        onChangeText={(val) => setBarrio(val)}
                    />
                    
                    <Text> El Nombre digitado es: {barrio}.
                    </Text>
            </View>
            <View style={styles.columnauno} >
            
                <TextInput
                        placeholder='Ingrese Telefono'
                        style={styles.inputext}
                        onChangeText={(val) => setTelefono(val)}
                    />
                    
                    <Text> El Nombre digitado es: {telefono}.
                    </Text>
            </View>
            <Text style={styles.textos} >
                proceso de pagoooo
                </Text>
            <View style={styles.columnatres} >
                <View style={styles.quinto}>
                <Button
                        style={styles.botones}
                        title="Efectivooo"
                        color="blue"/>
                </View>
                <View style={styles.sexto} >
                <Button
                        style={styles.botones}
                        title="Tarjeta"
                        color="orange"/>
                </View>
            </View>
            <View style={styles.septimo} >
            <Button
                        style={styles.botones}
                        title="Confirmaaaarr"
                        color="red"/>
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',


    },
    columnauno: {
        flex: 1,
        flexDirection: 'column',
        
        backgroundColor: 'gray',

    },
    inputext: {
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
    textos: {
        
        flex: 0.3,
        color:'white',
        backgroundColor:'black',
        

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

        backgroundColor: 'white',

    },
    quinto: {
        flex: 1,

        backgroundColor: 'orange',

    },
    sexto
    : {
        flex: 1,

        backgroundColor: 'red',

    },
    septimo: {
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

