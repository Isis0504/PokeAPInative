import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Aleatorios from './src/Componentes/aleatorios';
import Capturados from './src/Componentes/capturados';
import Favoritos from './src/Componentes/favoritos';
import Lista from './src/Componentes/lista';
import Pokemon from './src/Componentes/pokemon';
import Usuario from './src/Componentes/usuario';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Lista" component={Lista} />
          <Tab.Screen name="Aleatorios" component={Aleatorios} />
          <Tab.Screen name="Capturados" component={Capturados} />
          <Tab.Screen name="Favoritos" component={Favoritos} />
          <Tab.Screen name="Usuario" component={Usuario} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
