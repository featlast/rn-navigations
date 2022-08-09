import { StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.ligth,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: Colors.ligth,
  },
  simpleTitle: {
    marginLeft: 10,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
});
