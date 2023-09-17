import { StyleSheet, View } from "react-native";
import MessageInput from "./MessageInput";

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
});
