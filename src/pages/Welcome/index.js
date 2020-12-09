import React from "react";
import { ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import background from "../../assets/background.jpg";
import play from "../../assets/play.png";

import styles from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToLessons() {
    navigation.navigate("Lessons");
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#3782B5" />
      <ImageBackground source={background} style={styles.container}>
        <TouchableOpacity onPress={navigateToLessons}>
          <Image source={play} style={styles.playButton} />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
