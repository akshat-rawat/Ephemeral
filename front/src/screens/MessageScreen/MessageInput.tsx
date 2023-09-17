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
    flex: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginStart: 10,
  },
  messageInput: {
    height: 33,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});
