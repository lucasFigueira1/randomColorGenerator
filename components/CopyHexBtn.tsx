import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { copyToClipboard } from '@/helpers/copyToClipboard';

interface Props {
  hexToCopy: string
  textColor: string
}

export default function CopyHexBtn({ hexToCopy, textColor }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.btn]}
      onPress={() => copyToClipboard(hexToCopy)}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {hexToCopy}
      </Text>

      <Ionicons name="copy-outline" size={18} color={textColor} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  text: {
    fontSize: 16
  }
})