import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "_navigators/App.navigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <AppNavigator />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
