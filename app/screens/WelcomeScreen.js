import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Play from "./PlayScreen";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/doodlin_p2.jpg")}
    >
      <TouchableOpacity onPress={() => Play}>
        <Image
          style={styles.playButton}
          source={require("../assets/play.png")}
        ></Image>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 250,
    height: 200,
    bottom: 50,
    resizeMode: "contain",
  },
});
export default WelcomeScreen;
