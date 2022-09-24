import { Text, View } from "react-native";
import { tablaStyles } from "../assets/styles/styles";

export default function TablaRow({ element }) {
  return (
    <View style={tablaStyles.row}>
      <Text>{element.identificacion}</Text>
      <Text>{element.nombre}</Text>
      <Text>{element.asignatura}</Text>
      <Text>{element.momentoUno}</Text>
      <Text>{element.momentoDos}</Text>
      <Text>{element.momentoTres}</Text>
      <Text>{element.definitiva}</Text>
      <Text>{element.observaciones}</Text>
    </View>
  );
}