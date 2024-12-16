import React, { createContext, useContext, useState } from 'react'

export interface ColorContextProps {
  bgColor: string
  textColor: string
  setBgColor: (color: string) => void
  setTextColor: (textColor: string) => void
}

export const ColorContext = createContext<ColorContextProps>({} as ColorContextProps)

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [textColor, setTextColor] = useState("#000000")

  const value = {
    bgColor,
    textColor,
    setBgColor,
    setTextColor
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

export function useColorContext() {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider')
  }
  return context
}
