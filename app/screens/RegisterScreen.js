import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import registerAuth from "../api/register";
import useAuth from "../auth/useAuth";
import authApi from '../api/auth';
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(registerAuth.register);
  const loginApi = useApi(authApi.login)
  const { logIn } = useAuth();
  // state to store boolean value for register status
  const [ isRegisteredFailed, setIsRegisteredFailed ] = useState(false);
  const [ registerError, setRegisterError ] = useState()

  // destructure the values arg passed to this function
  const handleSubmit = async (userInfo) => {
    let response = await registerApi.request(userInfo);

    // Handling error
    if (!response.ok) {
      if (response.data) setRegisterError(response.data.error);
      else { // no data means it is a fault from the backend
        setRegisterError("An unexpected error occured.")
      };
      return setIsRegisteredFailed(true)
    };

    setIsRegisteredFailed(false);
    // if response.ok is true i.e wew successfully registered the user
    // then we send a login request to the server and get back a token
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    // after getting the auth token from the server 
    // which is going to decode set the user and store the token
    logIn(authToken)
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ErrorMessage error={registerError}  visible={isRegisteredFailed} />
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
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
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
