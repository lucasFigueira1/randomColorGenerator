import CopyHexBtn from "@/components/CopyHexBtn";
import { HEX_ARRAY } from "@/constants/hex";
import { getContrastingTextColor } from "@/helpers/getContrastingTextColor";
import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [color, setColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  function generateColor() {
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += HEX_ARRAY[Math.floor(Math.random() * 16)];
    }

    const newBgColor = `#${code}`;
    const newTextColor = getContrastingTextColor(newBgColor);
    setTextColor(newTextColor);

    return setColor(newBgColor)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Pressable
        onPress={() => generateColor()}
        style={[styles.container, { backgroundColor: color }]}
      >
        <Text style={[styles.text, { color: textColor }]}>
          Hello there
        </Text>
      </Pressable>

      <CopyHexBtn
        hexToCopy={color}
        textColor={textColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26
  }
})