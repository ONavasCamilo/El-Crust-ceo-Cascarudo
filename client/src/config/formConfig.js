import { getInitialState } from "@utils/formUtils";

export const loginFields = [
  {
    type: "text",
    placeholder: "User1234",
    name: "username",
    label: "Nombre de Usuario",
    required: true,
  },
  {
    type: "password",
    placeholder: "*********",
    name: "password",
    label: "Contraseña",
    required: true,
  },
  {
    type: "button",
    label: "Iniciar Sesión"
  },
];

export const registerFields = [
  {
    type: "text",
    placeholder: "User1234",
    name: "username",
    label: "Nombre de Usuario"
  },
  {
    type: "email",
    placeholder: "email@test.com",
    name: "email",
    label: "Email"
  },
  {
    type: "password",
    placeholder: "*********",
    name: "password",
    label: "Contraseña"
  },
  {
    type: "password",
    placeholder: "*********",
    name: "passwordConfirmation",
    label: "Repetir contraseña"
  },
  {
    type: "button",
    label: "Registrarse"
  },
];

export const createProductFields = [
  {
    type: "text",
    placeholder: "Producto",
    name: "name",
    label: "Nombre del Producto"
  },
  {
    type: "number",
    placeholder: "4.5",
    name: "price",
    label: "Precio"
  },
  {
    type: "number",
    placeholder: "50",
    name: "stock",
    label: "Stock"
  },
  {
    type: "radio",
    name: "category",
    label: "Categoría",
    options: [
      { value: "burger", label: "Burger" },
      { value: "drink", label: "Drink" }
    ]
  },
  {
    type: "button",
    label: "Crear Producto"
  },
]

export const loginInitialState = getInitialState(loginFields);
export const registerInitialState = getInitialState(registerFields);
export const createProductInitialState = getInitialState(createProductFields);