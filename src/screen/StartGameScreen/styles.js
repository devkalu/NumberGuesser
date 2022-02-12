import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
    padding: 20,
  },
});

export default styles;
