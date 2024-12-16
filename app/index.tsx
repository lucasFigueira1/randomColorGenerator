import CopyHexBtn from "@/components/CopyHexBtn";
import FullscreenPressable from "@/components/FullscreenPressable";
import { ColorProvider } from "@/context/ColorContext";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ColorProvider>
      <SafeAreaView style={styles.mainContainer}>
        <FullscreenPressable />
        <CopyHexBtn />
      </SafeAreaView>
    </ColorProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative'
  },
})