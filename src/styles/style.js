import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  cabecalho: {
    backgroundColor: "white",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    bottom: "42.5%",
  },
  rodape: {
    backgroundColor: "white",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    top: "45%",
  },
  body: {
    backgroundColor: "#fff",
  },
});

export default styles;