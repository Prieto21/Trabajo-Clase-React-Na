import React, { component, Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


class InicioCook extends Component {

    siguiente = () => {
        this.props.navigation.navigate('Segundoo')
    }

    render() {
    return (

        <View style={styles.container} >
            <Button
                        style={styles.botones}
                        title="Siguiente"
                        color="red"
                        onPress={this.siguiente} />
            <View style={styles.columnauno} >
            <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/fondo.jpg')}
                    />
            </View>
            <Text style={styles.textos} >
                        Seleccion de categoria
                </Text>
            <View style={styles.columnados} >
            
                <View style={styles.tercero}>
                    <Text>
                        Comidas
                </Text>
                </View>
                
                <View style={styles.terceroo}>
                    <Text>
                        Bebidas
                </Text>
                </View>
                
                <View style={styles.tercerooo}>
                    <Text>
                        Postres
                </Text>
                </View>
                
                <View style={styles.tercerooooo}>
                    <Text>
                        Sabores
                </Text>
                </View>
                <View style={styles.terceroooo} >

                    <Text>
                        Saludos
                </Text>

                </View>
            </View>
            
            <Text style={styles.textos} >
                        Seleccion de producto
                </Text>
            <View style={styles.columnatres} >
                <View style={styles.quinto}>
                <Image
                        style={styles.pro}
                        source={require('../../assets/receta.jpg')}
                    />
                </View>
                <View style={styles.quinto}>
                    <Text>
                         Pollo Asadooooooooooooooo
                </Text>
                </View>
                <View style={styles.quinto}>
                    <Text>
                        32.000 Mil pesos 
                </Text>
                </View>
            </View>
            <View style={styles.columnatres} >
                <View style={styles.quinto}>
                <Image
                        style={styles.pro}
                        source={require('../../assets/receta.jpg')}
                    />
                </View>
                <View style={styles.quinto}>
                    <Text>
                        Hamburguesaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
                </View>
                <View style={styles.quinto}>
                    <Text>
                        25.000 Mil pesos
                </Text>
                </View>
            </View>

        </View>
        
    )
}
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
    
    tinyLogo: {
        width: 400,
        height: 140,

    },
    
    pro: {
        width: 150,
        height: 150,

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
        flex: 0.5,

        backgroundColor: 'blue',

    },
    terceroo: {
        flex: 0.5,

        backgroundColor: 'red',

    },
    tercerooo: {
        flex: 0.5,

        backgroundColor: 'gray',

    },
    terceroooo: {
        flex: 0.5,

        backgroundColor: 'orange',

    },
    
    terceroooo: {
        flex: 0.5,

        backgroundColor: 'green',

    },
    cuarto: {
        flex: 1,

        backgroundColor: 'orange',

    },
    quinto: {
        flex: 1,

        backgroundColor: 'white',

    },
    textos: {
        flex: 0.3,
    
    },
    sexto: {
        flex: 1,

        backgroundColor: 'blue',

    },
    columnados: {
        flex:0.5,
        flexDirection: 'row',


    },
    columnatres: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',

    },

})
export default InicioCook

