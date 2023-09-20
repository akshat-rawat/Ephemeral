import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import MessageScreen from "./src/screens/MessageScreen";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MessageScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
