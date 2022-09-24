import { Text, View } from "react-native";
import { styleheader } from "../assets/styles/styles";

export default function Header() {
  return (
    <View style={styleheader.container}>
      <Text style={styleheader.htext}>Sistema de notas</Text>
    </View>
  );
}
