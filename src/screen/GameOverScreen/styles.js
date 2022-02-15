import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
  card: {
    maxWidth: "90%",
    alignItems: "center",
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 100,
    width: 200,
    height: 200,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 4,
  },
});

export default styles;
