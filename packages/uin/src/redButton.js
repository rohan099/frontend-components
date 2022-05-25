import * as React from "react";
import { Button as RNButton, View } from "react-native";

export const RedButton = ({ title = "Cool Native", ...props }) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white", color: "black" }}>
      <RNButton title={title} {...props} color="red"  />
    </View>
  );
};
