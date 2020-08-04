import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReadStory from "./screens/ReadStory";
import WriteStory from "./screens/WriteStory";
import {Image} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Tab = createBottomTabNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Write Story" component={WriteStory}
                            options={{
                                tabBarLabel: 'Write Story',
                                tabBarIcon: () => (
                                    <Image
                                        source={require("./assets/writing.jpg")}
                                        style={{width: 40, height: 40}}
                                    />
                                )
                            }}
                />

                <Tab.Screen name="Read Story" component={ReadStory}
                            options={{
                                tabBarLabel: 'Read Story',
                                tabBarIcon: () => (
                                    <Image
                                        source={require("./assets/read.jpg")}
                                        style={{width: 40, height: 40}}
                                    />
                                )
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

var AppNavigator = createSwitchNavigator({
    loginScreen:loginScreen
  });
  
  const AppContainer = createAppContainer(AppNavigator);