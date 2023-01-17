import {
  DarkTheme as ReactNavigationDarkTheme,
  DefaultTheme as ReactNavigationDefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  adaptNavigationTheme,
  MD3LightTheme,
} from "react-native-paper";

const adaptedThemes = adaptNavigationTheme({
  reactNavigationLight: ReactNavigationDefaultTheme,
  reactNavigationDark: ReactNavigationDarkTheme,
});

export function useNavigationTheme() {
  const scheme = useColorScheme();
  const navigationTheme =
    scheme === "dark" ? adaptedThemes.DarkTheme : adaptedThemes.LightTheme;
  return navigationTheme;
}

export function usePaperTheme() {
  const scheme = useColorScheme();
  const navigationTheme = scheme === "dark" ? MD3DarkTheme : MD3LightTheme;
  return navigationTheme;
}
