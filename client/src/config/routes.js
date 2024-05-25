export const routes = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "/login",
    label: "Login",
    showIfOffline: true,
  },
  {
    path: "/register",
    label: "Registrarse",
    showIfOffline: true,
  },
  {
    path: "/user-profile",
    label: "Perfil",
    showIfUser: true,
  },
  {
    path: "/create-product",
    label: "Crear Producto",
    showIfAdmin: true,
  },
  {
    path: "/admin",
    label: "Admin",
    showIfAdmin: true,
  },
]
