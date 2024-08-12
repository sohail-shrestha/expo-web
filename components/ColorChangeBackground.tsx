import { useRandomColor } from "@/hooks/useRandomColor";
import React, { PropsWithChildren } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
    GestureHandlerRootView,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const ColorChangeBackground: React.FC<PropsWithChildren> = ({children}) => {
  const {changeBackgroundColor, backgroundColor} = useRandomColor()

  const onPress = () => {
    changeBackgroundColor();
  };
  return (
    <GestureHandlerRootView>
      <TouchableWithoutFeedback
        style={{ ...styles.constainer, backgroundColor: backgroundColor }}
        onPress={onPress}
      >
        {children}
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

export { ColorChangeBackground };

const styles = StyleSheet.create({
  constainer: {
    display: "flex",
    height: Dimensions.get("window").height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
