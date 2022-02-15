import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  number: {
    color: colors.primary,
  },
});

export default styles;
