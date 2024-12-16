import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { HEX_ARRAY } from '@/constants/hex';
import { getContrastingTextColor } from '@/helpers/getContrastingTextColor';
import { useColorContext } from '@/context/ColorContext';

export default function FullscreenPressable() {
  const { setBgColor, setTextColor, bgColor, textColor } = useColorContext()

  function generateColor() {
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += HEX_ARRAY[Math.floor(Math.random() * 16)];
    }

    const newBgColor = `#${code}`;
    const newTextColor = getContrastingTextColor(newBgColor);
    setTextColor(newTextColor);

    return setBgColor(newBgColor)
  }

  return (
    <Pressable
      onPress={generateColor}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>
        Hello there
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26
  }
})