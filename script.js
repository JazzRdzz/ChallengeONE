// Función para encriptar un texto
function encriptarTexto(texto, clave) {
    let textoCifrado = "";
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      if (letra.match(/[a-z]/i)) { // Si es una letra
        let codigoAscii = texto.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <= 90) { // Si es una letra mayúscula
          letra = String.fromCharCode(((codigoAscii - 65 + clave) % 26) + 65);
        } else if (codigoAscii >= 97 && codigoAscii <= 122) { // Si es una letra minúscula
          letra = String.fromCharCode(((codigoAscii - 97 + clave) % 26) + 97);
        }
      }
      textoCifrado += letra;
    }
    return textoCifrado;
  }
  
  // Función para desencriptar un texto
  function desencriptarTexto(textoCifrado, clave) {
    let texto = "";
    for (let i = 0; i < textoCifrado.length; i++) {
      let letra = textoCifrado[i];
      if (letra.match(/[a-z]/i)) { // Si es una letra
        let codigoAscii = textoCifrado.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <= 90) { // Si es una letra mayúscula
          letra = String.fromCharCode(((codigoAscii - 65 - clave + 26) % 26) + 65);
        } else if (codigoAscii >= 97 && codigoAscii <= 122) { // Si es una letra minúscula
          letra = String.fromCharCode(((codigoAscii - 97 - clave + 26) % 26) + 97);
        }
      }
      texto += letra;
    }
    return texto;
  }
  