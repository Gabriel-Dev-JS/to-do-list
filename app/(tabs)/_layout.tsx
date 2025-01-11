import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <TabBarIcon name={focused ? 'check-square' : 'check-square'} color={color} />
            // <Feather name="check-square" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="cadastrarTarefas"
        options={{
          title: 'Cadastrar Tarefas',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <TabBarIcon name={focused ? 'list' : 'list'} color={color} />
            // <Feather name="list" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
