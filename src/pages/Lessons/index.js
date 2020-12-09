import React from "react";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import background from "../../assets/background.jpg";
import styles from "./styles";

export default function Lessons() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Welcome");
  }

  return (
    <>
      <StatusBar backgroundColor="#3782b5" style="light" />
      <ImageBackground source={background} style={styles.container}>
        <TouchableOpacity onPress={navigateToHome}>
          <Icon name="arrowleft" size={35} color="#FFF" />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
