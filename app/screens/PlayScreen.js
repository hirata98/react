import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

function Play() {
  return <Text style={styles.container}>ESTOU TESTANDO</Text>;
}
const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    justifyContent: "flex-end",
  },
});
export default Play;
