import * as React from "react";
import { Text, TouchableHighlight } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export const GradientButton = ({ disable = false, onPress, colors = ['#F1AEFC', '#F8D6FD', '#F1AEFC', '#8C46FF', '#2622E8'], title = "my gradient button", ...props }) => {
    return (
        <TouchableHighlight
            disabled={disable}
            onPress={() => {
                onPress();
            }}
        >
            <LinearGradient
                colors={colors}
                style={{
                    padding: 15,
                    alignItems: 'center',
                    borderRadius: 5,
                }}>
                <Text style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#fff',
                }}>{title}</Text>
            </LinearGradient>
        </TouchableHighlight>
    );
};
