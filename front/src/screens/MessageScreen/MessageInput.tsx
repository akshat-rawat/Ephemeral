import { StyleSheet, TextInput, View } from "react-native";

export default function MessageInput() {
  return (
    <View style={styles.messageContainer}>
      <TextInput style={styles.messageInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 10,
  },
  messageInput: {
    height: 33,
    borderRadius: 50,
    padding: 2,
  },
});
