import { ColorChangeBackground } from "@/components/ColorChangeBackground";
import { HELLO_THERE } from "@/constants/String";
import React from "react";
import { Text } from "react-native";

const Home: React.FC = () => {
  return (
    <ColorChangeBackground>
      <Text>{HELLO_THERE} </Text>
    </ColorChangeBackground>
      

  );
};

export default Home;

