// import { Image, StyleSheet, Platform } from 'react-native';

// import CheckBox from "@react-native-community/checkbox";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { InputSearch } from "@/components/InputSearch";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface tarefasProps {
  id: number;
  tarefa: string;
  check?: boolean;
}

export default function HomeScreen() {

  const [tarefa, setTarefa] = useState<string>("")
  const [tarefas, setTarefas] = useState<tarefasProps[]>([])
  const [deletarTarefa, setDeletarTarefa] = useState<tarefasProps[]>([])
  

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
  }
 
  const excluirTarefa = () => {
    const tarefasCheck = tarefas.filter(item => item.check !== true)
    setTarefas(tarefasCheck);
}

  return(
    <View style={{flex: 1, backgroundColor:'white',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <GestureHandlerRootView>
        <ScrollView style={{marginTop:50,height:'90%', width:'90%', backgroundColor:'black', flex: 1}}>
          { tarefas.map((tarefa) => {
            return ( 
              <CheckBox 
              tarefa={"Tarefa: " + tarefa.tarefa} 
              checked={tarefa.check} 
              func={() => alterarCheckbox(tarefa.id)} 
              key={tarefa.id}
              iconTrash={() => console.log("teste")}
              />
            )
          })}
          {deletarTarefa.map(item => <View style={{backgroundColor:"white"}}>{item.id}</View>)}
        </ScrollView> 
        <InputSearch placeholder="Cadastre uma exercicio"  onChangeText={setTarefa} value={tarefa}/>
        <Button title="Cadastrar" onPress={enviarTarefa}/>
        <Button title="Excluir" onPress={excluirTarefa}/>
      </GestureHandlerRootView>
    </View>
  )
}