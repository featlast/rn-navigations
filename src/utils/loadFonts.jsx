import { useFonts, Margarine_400Regular } from "@expo-google-fonts/margarine";

export const loadFonts = () => {
  let [fontsLoaded] = useFonts({
    Margarine_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }
};
