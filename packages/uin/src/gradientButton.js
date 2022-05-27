import * as React from "react";
import { Text, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const GradientButton = ({
  disable = false,
  onPress,
  colors = ["#F1AEFC", "#F8D6FD", "#F1AEFC", "#8C46FF", "#2622E8"],
  title = "my gradient button",
  start ={ x: 0.0, y: 1.0 },
  end={ x: 1.0, y: 1.0 },
  ...props
}) => {
  return (
    <TouchableHighlight
      disabled={disable}
      style={{
        ...props.style,
      }}
      onPress={() => {
        onPress();
      }}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Gill Sans",
            textAlign: "center",
            margin: 10,
            color: "#ffffff",
            backgroundColor: "transparent",
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};
