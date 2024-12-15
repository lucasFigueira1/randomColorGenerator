import { setStringAsync } from 'expo-clipboard';


export const copyToClipboard = async (hex: string) => {
  await setStringAsync(hex);
};