import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    maxWidth: "80%",
    marginTop: 20,
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  listContainer: {
    width: "60%",
    flex: 1,
  },
  list: {
    // alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
});

export default styles;
