// import Ionicons from '@expo/vector-icons/Ionicons';
// import { StyleSheet, Image, Platform } from 'react-native';

import { Button } from "@/components/Button";
import { InputSearch } from "@/components/InputSearch";
import { useState } from "react";
import { View } from "react-native";

interface tarefasProps {
  id: number
  tarefa: string
  check?: boolean
}


export default function TabTwoScreen() {
  
// const [tarefa, setTarefa] = useState('');

// const enviarTarefa = () => {
//   console.log(tarefa)
//   setTarefa('')
//   return tarefa
// }


  const [tarefa, setTarefa] = useState<string> ("")
  const [tarefas, setTarefas] = useState<tarefasProps[]>([])
    
  
  const alterarCheckbox = (id:number) => {
    setTarefas(prevTarefas => prevTarefas.map(
      tarefa => tarefa.id === id ? {...tarefa, check: !tarefa.check} : tarefa
    ))
  }

  const enviarTarefa = () => {

    var inserirTarefas:Array<tarefasProps> = [...tarefas,{
      id: tarefas.length + 1,
      tarefa: tarefa,
      check: false
    }]

    setTarefa("")
    setTarefas(inserirTarefas)
    console.log(tarefas)
  }

  return(
    <View style={{flex:1 ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <View style={{display:"flex", backgroundColor:'#D3D3D3', height:'50%', justifyContent:'space-between'}}>
        <InputSearch placeholder="Insira uma tarefa"  onChangeText={setTarefa} value={tarefa}/>
        <Button title="Cadastrar" onPress={enviarTarefa}/>
      </View>
    </View>
  )
}



