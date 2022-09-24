import { View, TextInput, Text } from "react-native";
import { styleInputRow } from "../assets/styles/styles";

export default function InputRow({ label, mensajeError, textInputProps }) {
  return (
    <View style={styleInputRow.container}>
      <Text>{label}</Text>
      <View>
        <TextInput
          {...textInputProps}
          style={[
            styleInputRow.input,
            {
              borderBottom: "1px solid",
              borderBottomColor: mensajeError ? "red" : "black",
            },
          ]}
        />
        {mensajeError ? (
          <Text style={styleInputRow.errorMessage}>{mensajeError}</Text>
        ) : null}
      </View>
    </View>
  );
}