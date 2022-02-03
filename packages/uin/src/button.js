import * as React from "react";
import { Button as RNButton, View } from "react-native";

export const Button = ({ title = "Cool Native", ...props }) => {
  return (
    <View style={{ padding: 10, backgroundColor: "blue", color: "white" }}>
      <RNButton title={title} {...props} />
    </View>
  );
};
