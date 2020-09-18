import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//import Inicio  from './src/parcial/primero';
import Inicio  from './src/clase/primera';
import Dos  from './src/clase/segunda';
import tres  from './src/clase/tercero';
//import InicioDos  from './src/parcial/segundo';


const InicioNavigator = createStackNavigator({
   Bienvenido:{
     screen: Inicio
     
   },
   Segundoo:{
    screen: Dos
    
  },
  Pedido:{
    screen: tres
    
  },
   
   
});

export default createAppContainer(InicioNavigator);


 
 