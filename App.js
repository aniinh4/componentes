import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

/*  estilos */
import styles from "./src/styles/style";
/* componentes */
import Component1 from "./src/component/component1";
import Component2 from "./src/component/component2";
import Component3 from "./src/component/component3";

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

   {/*  cabecalho */}
      <Component1/>

    {/*   corpo */}
      <Component2/>

     {/*  rodape */}
      <Component3/>

    </View>
  );
}