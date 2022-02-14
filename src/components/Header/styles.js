import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "12%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
});

export default styles;
