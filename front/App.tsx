import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MessageScreen from "./src/screens/MessageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MessageScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
