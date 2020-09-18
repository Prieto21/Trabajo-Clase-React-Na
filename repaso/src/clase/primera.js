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
            <ScrollView>
                <View style={styles.contenido}>
                    <ImageBackground style={styles.fondoimagen}
                        source={require('../../assets/fondo.jpg')}
                    >
                        <View style={styles.container}>
                           
                            <View style={styles.columnauno} >
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/foto.jpg')}
                                />
                            </View>
                            <Text style={styles.textos} >
                                Seleccion de categoria
                </Text>
                            <View style={styles.columnados} >

                                <View style={styles.tercero}>
                                    <Text >
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
                                        source={require('../../assets/comida.jpg')}
                                    />
                                </View>
                                <View style={styles.quinto}>
                                    <Text style={styles.textos} >
                                        Hamburguesa Monster
                </Text>
                                </View>
                                <View style={styles.quinto}>
                                    <Text style={styles.textos} >
                                        32.000 Mil pesos
                </Text>
                <Button
                                style={styles.botones}
                                title="Agregar"
                                color="green"
                                 />
                                </View>
                            </View>
                            <View style={styles.columnatres} >
                                <View style={styles.quinto}>
                                    <Image
                                        style={styles.pro}
                                        source={require('../../assets/comida1.jpg')}
                                    />
                                </View>
                                <View style={styles.quinto}>
                                    <Text style={styles.textos} >
                                        Hot Dog Chileno
                </Text>
                                </View>
                                <View style={styles.quinto}>
                                    <Text style={styles.textos} >
                                        25.000 Mil pesos
                </Text>
                <Button
                                style={styles.botones}
                                title="Agregar"
                                color="green"
                                 />
                                </View>
                            </View>

                        </View>
                        <View style={styles.columnatres} >
                            <View style={styles.quinto}>
                                <Image
                                    style={styles.pro}
                                    source={require('../../assets/comida2.jpg')}
                                />
                            </View>
                            <View style={styles.quinto}>
                                <Text style={styles.textos} >
                                Sandwich Gratinado
                </Text>
                            </View>
                            <View style={styles.quinto}>
                                <Text style={styles.textos} >
                                    10.000 Mil pesos
                </Text>
                <Button
                                style={styles.botones}
                                title="Agregar"
                                color="green"
                                 />
                            </View>
                        </View>

                        <View style={styles.columnatres} >
                        <View style={styles.quinto}>
                            <Image
                                style={styles.pro}
                                source={require('../../assets/comida3.jpg')}
                            />
                        </View>
                        <View style={styles.quinto}>
                            <Text style={styles.textos} >
                                Alitas BBQ
                </Text>
                        </View>
                        <View style={styles.quinto}>
                            <Text style={styles.textos} >
                                18.000 Mil pesos
                </Text>
                <Button
                                style={styles.botones}
                                title="Agregar"
                                color="green"
                                 />
                        </View>
                    </View>
                    <View style={styles.ColumnBarras} >
                        <View style={styles.barra}>
    
                           <Text style={styles.textos}>
TU ORDEN
                           </Text>
                           </View>
                           <View style={styles.barra}>
    
                           
                           <Button
                                style={styles.botones}
                                title="PEDIDO"
                                color="red"
                                onPress={this.siguiente} />
                           
                           </View>
                           <View style={styles.barra}>
                           <Text style={styles.textos}>
VALOR
                           </Text>
                    </View>
                    
                    </View>

                    
        
        </ImageBackground>


            </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        flexDirection: 'column',




    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },

    fondoimagen: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
        width: 100,
        height: 100,

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



    },
    barra: {
        flex:1,
        flexDirection: 'row',
        
        

    },
   
    textos: {
        flex: 0.3,
        color: 'white',

    },
    sexto: {
        flex: 1,

        backgroundColor: 'blue',

    },
    columnados: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    columnatres: {
        flex: 1,
        flexDirection: 'row',


    },
    ColumnBarras: {
        flex:1,
        flexDirection: 'row',


    },

})
export default InicioCook

