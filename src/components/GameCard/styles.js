import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  input: {
    width: "20%",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
    padding: 10,
    maxWidth: "80%",
  },
  button: {
    width: 100,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  instruction: {
    color: colors.primary,
    fontWeight: "400",
    fontSize: 16,
  },
});

export default styles;
