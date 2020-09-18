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
            
                <View style={styles.contenido}>
                    <ImageBackground style={styles.fondoimagen}
                        source={require('../../assets/fondo.jpg')}
                    >
                        <View style={styles.container}>
                            <View style={styles.conte}>

                                <View style={styles.uno}>
                                    <Text style={styles.textoo}>
                                        PEDIDO
                                </Text>
                                </View>

                                <View style={styles.dos}>
                                <View style={styles.dos}>
                                 
                                 <Text>
HOLA
                                 </Text>
                                 </View>
                                </View>
                              

                               

                            </View>
                        </View>



                    </ImageBackground>


                </View>
            
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




    },
    conte: {
        flex: 1,




    },
    textoo: {
        color: 'white',

    },

    fondoimagen: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    uno: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center'


    },
    dos: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    dosuno: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',


    },
    doslong: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',



    },
    tres: {
        flex: 2,
        flexDirection: 'column',
        

    },
    cuatro: {
        flex: 1,
        flexDirection: 'column',
        

    },


    pro: {
        width: 200,
        height: 200,

    },

})
export default InicioCook

