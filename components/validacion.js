export const validarTodosLosCampos = (listaDeCampos) => {
    let isValido = true;
  
    for (let index = 0; index < listaDeCampos.length; index++) {
      const { valor, fnSetError } = listaDeCampos[index];
      isValido = validacionRequeridos(valor, fnSetError);
      if (!isValido) {
        return isValido;
      }
    }
    return isValido;
  };
  
  export const validacionRequeridos = (valor, funcionSetError) => {
    funcionSetError(valor === "" ? "El campo es requerido" : "");
    return !(valor === "");
  };
  export const getDefinitiva = (mnota1, mnota2, mnota3) => {
    let nota1 = parseFloat(mnota1);
    let nota2 = parseFloat(mnota2);
    let nota3 = parseFloat(mnota3);
    if (
      nota1 >= 0 &&
      nota1 <= 5 &&
      nota2 >= 0 &&
      nota2 <= 5 &&
      nota3 >= 0 &&
      nota3 <= 5
    ) {
      nota1 = nota1 * 0.3;
      nota2 = nota2 * 0.35;
      nota3 = nota3 * 0.35;
      let ndefinitiva = nota1 + nota2 + nota3;
  
      return ndefinitiva.toFixed(2);
    }
  };
  export const getObservacion = (definitiva) => {
    let mensaje = "";
    if (definitiva > 3) {
      mensaje = "Aprueba";
    } else if (definitiva >= 2 && definitiva < 2.94) {
      mensaje = "Habilita";
    } else if (definitiva < 2) {
      mensaje = "Reprueba";
    }
    return mensaje;
  };
  
  export const validacionNotasRequeridos = (valor, funcionSetError) => {
    let isValido = parseFloat(valor) > 0 && parseFloat(valor) <= 5;
    funcionSetError(isValido ? "" : "La nota debe estar entre 0 y 5");
    return isValido;
  };
  
  export const validarNotas = (listaDeCampos) => {
    let isValido = true;
  
    for (let index = 0; index < listaDeCampos.length; index++) {
      const { valor, fnSetError } = listaDeCampos[index];
      isValido = validacionNotasRequeridos(valor, fnSetError);
      if (!isValido) {
        return isValido;
      }
    }
    return isValido;
  };