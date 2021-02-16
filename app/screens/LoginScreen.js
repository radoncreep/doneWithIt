import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import apiAuth from '../api/auth';
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();
  // const authContext = React.useContext(AuthContext); // returns an object 
  const [ loginFailed, setLoginFailed ] = useState(false);


  const handleSubmit = async({ email, password }) => {
    const response = await apiAuth.login(email, password);

    if (!response.ok) return setLoginFailed(true);

    setLoginFailed(false);
    // pass in the auth token to the jwtDecode function to decode the data into a usable user object
    logIn(response.data);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      {/* the string passed to error attr/prop can be hard coded or gotten from the server */}
      {/* we make use of a state to control the visible attr/prop */}
      <ErrorMessage error="Invalid email or password" visible={loginFailed} />
      <Form
        initialValues={{ email: "", password: "" }}
        // values of this form which was formerly logged to the console is now passed to the function
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
