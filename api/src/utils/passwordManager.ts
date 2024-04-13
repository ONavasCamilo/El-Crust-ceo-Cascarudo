import bcrypt from "bcrypt";

// Función para hashear una contraseña
export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

// Función para verificar si una contraseña coincide con su hash
export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};