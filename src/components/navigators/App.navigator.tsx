import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "_screens/Home.screen";
import MessagesScreen from "_screens/Messages.screen";
import { HelpScreen } from "_screens/Help.screen";
import LoginScreen from "_screens/Login.screen";
import { type AppNavigatorParams } from "_types/navigation.types";
import { useNavigationTheme } from "_hooks/theme.hook";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "_slices/app/app.slice";

const Stack = createNativeStackNavigator<AppNavigatorParams>();
const AppNavigator = () => {
  const navigationTheme = useNavigationTheme();
  const isLoggedIn = useSelector(selectLoggedIn);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logoutOnPress = () => setIsLoggedIn(false);
  // const loginOnPress = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <NavigationContainer theme={navigationTheme}>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Help"
            component={HelpScreen}
            initialParams={{ content: "Stack content" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
