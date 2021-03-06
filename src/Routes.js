import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Welcome from "./pages/Welcome";
import Lessons from "./pages/Lessons";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Lessons" component={Lessons} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
