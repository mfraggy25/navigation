import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SignInScreen from "./SignInScreen";

const SignUpScreen = ({ navigation }) => {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { firstName, lastName, password, email } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Enter your details below:</Text>
      </View>
      <View style={styles.footer}>
        <Text style={([styles.text_footer], { marginTop: 35 })}>
          First Name
        </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.onChangeText("username", val)}
          />
        </View>
        <Text style={([styles.text_footer], { marginTop: 35 })}>Last Name</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.onChangeText("username", val)}
          />
        </View>
        <Text style={([styles.text_footer], { marginTop: 35 })}>Password</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Must be 5-12 characters"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(val) => this.onChangeText("password", val)}
          />
        </View>
        <Text style={([styles.text_footer], { marginTop: 35 })}>Email</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.onChangeText("email", val)}
          />
        </View>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("SignInScreen")}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
