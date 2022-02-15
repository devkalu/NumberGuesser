import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonTitle: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "white",
  },
});

export default styles;
