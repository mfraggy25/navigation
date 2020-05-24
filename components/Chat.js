import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Chat </Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
export default Chat;
