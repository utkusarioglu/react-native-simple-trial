import React, { useState, type FC } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { type AppNavigatorParams } from "_types/navigation.types";

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const AppNavigator = () => {
  // const scheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logoutOnPress = () => setIsLoggedIn(false);
  // const loginOnPress = () => setIsLoggedIn(true);

  return (
    <NavigationContainer>
      <StatusBar />
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Help"
            component={HelpScreen}
            // initialParams={{ content: "Stack content" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const HomeScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Home"> & {}
> = () => (
  <View>
    <Text>Home screen</Text>
  </View>
);
const HelpScreen = () => (
  <View>
    <Text>Help screen</Text>
  </View>
);
const LoginScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Login"> & {}
> = () => (
  <View>
    <Text>Login screen</Text>
  </View>
);

export default AppNavigator;
