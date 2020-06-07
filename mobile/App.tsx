import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

// <View> -> Parecido a div. Representa qualquer tipo de "caixa" do HTML (<section>, <div>, <header>...)
// <Text> -> Subtitui todo o texto do HTML (<h1>, <p>, <span>...)
// {style.objeto} -> style: Para definir o style do conteúdo / objeto: Nome da "class" do style
// O "CSS" do ReactNative funciona com objetos do JavaScript;
// <> </> (Fragment) -> Espécie de div para colocar mais que um conteúdo

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Routes />
    </>
  );
}