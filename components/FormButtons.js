import { Text, TouchableOpacity, View } from "react-native";
import { formButtons } from "../assets/styles/styles";

export default function FormButtons({
  onPressCalcularGuardar,
  onPressLimpiar,
  onPressBuscar,
}) {
  return (
    <View style={formButtons.container}>
      <TouchableOpacity onPress={onPressCalcularGuardar}>
        <Text style={formButtons.button}>Calcular/Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLimpiar}>
        <Text style={formButtons.button}>Limpiar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBuscar}>
        <Text style={formButtons.button}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}