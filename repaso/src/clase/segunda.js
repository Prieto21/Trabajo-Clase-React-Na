import React, { component, Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


class InicioCook extends Component {

    siguiente = () => {
        this.props.navigation.navigate('Pedido')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.contenido}>
                    <ImageBackground style={styles.fondoimagen}
                        source={require('../../assets/fondo.jpg')}
                    >
                        <View style={styles.container}>
                            <View style={styles.conte}>

                                <View style={styles.uno}>
                                    <Text>
                                        
                                </Text>
                                </View>

                                <View style={styles.dos}>
                                    <Image
                                        style={styles.pro}
                                        source={require('../../assets/comida3.jpg')}
                                    />

                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.dosuno}>
                                    <View style={styles.doslong}>

                                        <Text style={styles.textoo} >
                                            CANTIDAD
                                </Text>
                                    </View>
                                    <View style={styles.doslong}>
                                        <Button
                                            style={styles.botones}
                                            title="-"
                                            color="red"
                                        />
                                    </View>
                                    <View style={styles.doslong}>
                                        <Text style={styles.textoo} >
                                            1
                                </Text>
                                    </View>
                                    <View style={styles.doslong}>
                                        <Button
                                            style={styles.botones}
                                            title="+"
                                            color="green"
                                        />
                                    </View>
                                    <View style={styles.doslong}>
                                        <Text style={styles.textoo} >
                                            VALOR
                                </Text>
                                    </View>
                                </View>

                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.cuatro}>
                                <Button
                                            style={styles.botones}
                                            title="Agregar Pedido"
                                            color="gold"
                                            onPress={this.siguiente}
                                        />
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                <View style={styles.tres}>
                                    <Text></Text>
                                </View>
                                


                               

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


    },
    dos: {
        flex: 1,
        flexDirection: 'column',
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

