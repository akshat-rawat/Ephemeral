import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MessageSendButton() {
  return (
    <View style={styles.buttonContainer}>
      <Ionicons name="send" size={18} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
