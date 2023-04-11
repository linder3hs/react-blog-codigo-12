// Funcion para validar si es un correo
export function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}

// Funcion para validar el password y ver si tiene mas de 8 caracteres
export function isPasswordValid(password) {
  return password.length >= 8;
}
