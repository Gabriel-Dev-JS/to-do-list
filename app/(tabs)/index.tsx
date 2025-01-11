// import { Image, StyleSheet, Platform } from 'react-native';

// import CheckBox from "@react-native-community/checkbox";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { InputSearch } from "@/components/InputSearch";
import SwipeableCard from "@/components/SwipeList";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface tarefasProps {
  id: number
  tarefa: string
  check?: boolean
}

export default function HomeScreen() {
  const [ativoEncerrado, setAtivoEncerrado] = useState<boolean> (false)
  const [tarefa, setTarefa] = useState<string> ("")
  const [tarefas, setTarefas] = useState<tarefasProps[]>([])
  
  const checados:Array<boolean> = []

  const AlterarCheckbox = (id:tarefasProps) => {
    tarefas.forEach((tarefas => {
      // if(tarefas.id !== id.id){
      // }
      (tarefas.id !== id.id) ? (setAtivoEncerrado(!ativoEncerrado)) : (ativoEncerrado)
    }))
    // setAtivoEncerrado(!ativoEncerrado)
    checados.push(ativoEncerrado)
    console.log(checados)
  }
  
  const enviarTarefa = () => {

    var inserirTarefas:Array<tarefasProps> = [...tarefas,{
      id: tarefas.length + 1,
      tarefa: tarefa,
      check: ativoEncerrado
    }]

    setTarefa("")
    
    setTarefas(inserirTarefas)
  }
  
  // const AlterarCheckbox = (id:number) => {
  //   const novasTarefas = tarefas.map((item) =>
  //     item.id === id ? { ...item, check: !item.check } : item
  //   );
  //   setTarefas(novasTarefas);
  // };
  

  const excluirTarefa = () => {
      tarefas.forEach(index => {
        if(!ativoEncerrado){
          tarefas.splice(index.id)
        }
      })
  }

  return(
      <View style={{flex: 1, backgroundColor:'white',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <GestureHandlerRootView>
          <ScrollView style={{marginTop:50,height:'90%', width:'90%', backgroundColor:'black', flex: 1}}>
            {/* <SwipeableCard 
              children={
                tarefas.map(
                  (tarefa, index) => (
                    <CheckBox texto={"Tarefa: " + tarefa.tarefa} checked={ativoEncerrado} func={AlterarCheckbox} key={index}/>
                  )
                )
              }
            /> */}
            {tarefas.map((tarefa) => {
              return ( 
                <SwipeableCard 
                children={
                  <CheckBox texto={"Tarefa: " + tarefa.tarefa} checked={ativoEncerrado} func={AlterarCheckbox} key={tarefa.id}/>
                }
              /> 
              )
            })}
          </ScrollView> 
          <InputSearch placeholder="Cadastre uma tarefa"  onChangeText={setTarefa} value={tarefa}/>
          <Button title="Cadastrar" onPress={enviarTarefa}/>
        </GestureHandlerRootView>
      </View>
  )
}