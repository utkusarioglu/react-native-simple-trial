import { useNavigation } from "@react-navigation/native";
import React, { type FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Surface, Button } from "react-native-paper";

const LoginSurfaceView: FC = () => {
  const { navigate } = useNavigation();

  return (
    <Surface elevation={2} style={styles.surface}>
      <LoginForm />
    </Surface>
  );
};

const LoginForm = () => {
  const loginOnPress = () => console.log("This hasn't been implemented yet");
  return (
    <View>
      <TextInput
        style={styles.textInput}
        accessibilityLabelledBy="Login"
        accessibilityLanguage="EN-US"
      />
      <TextInput
        style={styles.textInput}
        accessibilityLabelledBy="Login"
        accessibilityLanguage="EN-US"
      />
      <Button onPress={loginOnPress} style={styles.button} mode="contained">
        Login
      </Button>
      <Button onPress={loginOnPress} style={styles.button}>
        Sign up instead
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 25,
    borderRadius: 20,
  },
  textInput: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 8,
    width: "100%",
  },
});

export default LoginSurfaceView;
