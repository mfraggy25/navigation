import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Home </Text>
        <Button
          title="Go to Profile View"
          onPress={() => this.props.navigation.navigate("Profile")}
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
export default Home;
