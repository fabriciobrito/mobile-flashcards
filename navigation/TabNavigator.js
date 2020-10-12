import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import AddDeckStack from './AddDeckStack';

const Tab = createBottomTabNavigator();

export default function Main() {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch(route.name){
              case 'Decks':
                iconName = 'cards';
                break;
              case 'Add Deck':
                iconName = 'creation';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Decks" component={HomeStack} />
        <Tab.Screen name="Add Deck" component={AddDeckStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}