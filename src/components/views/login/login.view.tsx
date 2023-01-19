import React, { type FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Surface, Button, Text } from "react-native-paper";
import { setLoggedIn } from "_slices/app/app.slice";
import { Formik } from "formik";
import * as Yup from "yup";

interface LoginFields {
  username: string;
  password: string;
}

const LOGIN_FORM_INITIAL_VALUES: LoginFields = {
  username: "",
  password: "",
};

const changeValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username too short")
    .max(20, "Username too long")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(20, "Password too long")
    .required("Password is required"),
});

const LoginSurfaceView: FC = () => {
  return (
    <Surface elevation={2} style={styles.surface}>
      <LoginForm />
    </Surface>
  );
};

async function tryLogin(username: string, password: string): Promise<any> {
  console.log("try Login start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("try Login timeout");
      let loggedIn = false;
      let error = "";
      if (username === "utku" && password === "utku") {
        loggedIn = true;
      } else {
        error = "Wrong username or password";
      }
      resolve({ loggedIn, error });
    }, 2000);
  });
}

const LoginForm = () => {
  const signUpOnPress = () => console.log("This hasn't been implemented yet");

  return (
    <View>
      <Formik
        initialValues={LOGIN_FORM_INITIAL_VALUES}
        onSubmit={async ({ username, password }, { setStatus }) => {
          const response = await tryLogin(username, password);
          console.log({ response });
          if (response.loggedIn) {
            setLoggedIn(true);
          } else {
            setStatus({ error: response.error });
          }
        }}
        validateOnChange={true}
        validationSchema={changeValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          status,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <TextInput
              label="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              error={touched.username && !!errors.username}
              value={values.username}
              style={styles.textInput}
              editable={!isSubmitting}
              autoComplete="username"
              accessibilityLabelledBy="Login"
              accessibilityLanguage="EN-US"
            />
            {touched.username && !!errors.username && (
              <Text variant="labelSmall">{errors.username}</Text>
            )}

            <TextInput
              label="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={touched.password && !errors.password}
              editable={!isSubmitting}
              style={styles.textInput}
              autoComplete="password"
              accessibilityLabelledBy="Login"
              accessibilityLanguage="EN-US"
            />
            {touched.password && !!errors.password && (
              <Text variant="labelSmall">{errors.password}</Text>
            )}

            <Button
              onPress={() => handleSubmit()}
              style={styles.button}
              disabled={isSubmitting}
              mode="contained">
              Login
            </Button>

            {status && status.error && (
              <Text variant="labelSmall">{status.error}</Text>
            )}
            <Button onPress={signUpOnPress} style={styles.button}>
              Sign up instead
            </Button>
          </>
        )}
      </Formik>
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
