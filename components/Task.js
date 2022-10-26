import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <View style={styles.square}></View>
        <Text style={styles.taskListText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  left: {
    flexDirection: "row",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
  taskListText: { maxWidth: "80%" },
});
