import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tab1" component={Tab1} />
          <Tab.Screen name="Tab2" component={Tab2} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}