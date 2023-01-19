import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React, { type FC } from "react";
import AppNavigator from "./components/navigators/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { usePaperTheme } from "_hooks/theme.hook";
import { Provider } from "react-redux";
import store from "_store";

const App: FC = () => {
  const paperTheme = usePaperTheme();

  return (
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
