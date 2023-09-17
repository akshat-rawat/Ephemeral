import { StyleSheet, View } from "react-native";
import MessageInput from "./MessageInput";
import MessageSendButton from "./MessageSendButton";

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MessageInput />
        <MessageSendButton />
      </View>
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
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
});
