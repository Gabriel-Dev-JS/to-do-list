// import Ionicons from '@expo/vector-icons/Ionicons';
// import { StyleSheet, Image, Platform } from 'react-native';

import { Button } from "@/components/Button";
import { InputSearch } from "@/components/InputSearch";
import { useState } from "react";
import { Text, View } from "react-native";


export default function TabTwoScreen() {
  
const [tarefa, setTarefa] = useState('');

const enviarTarefa = () => {
  console.log(tarefa)
  setTarefa('')
  return tarefa
}

  return(
    <View>
      <Text>tela dois</Text>
      <InputSearch placeholder="Cadastre uma tarefa"  onChangeText={setTarefa} value={tarefa}/>
      <Button title="Cadastrar" onPress={enviarTarefa}/>
    </View>
  )
}



