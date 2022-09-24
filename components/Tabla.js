import { View, Text } from "react-native";
import TablaRow from "./TablaRow";
import { tablaStyles } from "../assets/styles/styles";

export default function Tabla({ notas }) {
  return (
    <View>
      <View style={tablaStyles.titulos}>
        <Text style={tablaStyles.titulo}>Identificacion</Text>
        <Text style={tablaStyles.titulo}>Nombre</Text>
        <Text style={tablaStyles.titulo}>Asignatura</Text>
        <Text style={tablaStyles.titulo}>Momento Uno</Text>
        <Text style={tablaStyles.titulo}>Momento Dos</Text>
        <Text style={tablaStyles.titulo}>Momento Tres</Text>
        <Text style={tablaStyles.titulo}>Definitiva</Text>
        <Text style={tablaStyles.titulo}>Observaciones</Text>
      </View>
      <View style={tablaStyles.container}>
        {notas.map((element, index) => (
          <TablaRow
            element={element}
            key={`${element.identificacion}-${index}`}
          />
        ))}
      </View>
    </View>
  );
}
