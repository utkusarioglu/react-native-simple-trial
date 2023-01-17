import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React, { type FC } from "react";
import AppNavigator from "./components/navigators/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { usePaperTheme } from "_hooks/theme.hook";

const App: FC = () => {
  const paperTheme = usePaperTheme();

  return (
    <>
      <PaperProvider theme={paperTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </>
  );
};

export default App;
