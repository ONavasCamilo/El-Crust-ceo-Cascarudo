import Form from "./Form"
import useProducts from "../../hooks/useProducts";

const fields = [
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

const initialState = {
  name: "",
  price: "",
  stock: "",
  category: ""
}

const CreateProduct = () => {
  const { createProduct } = useProducts();

  const handleCreateProduct = ({ event, formData }) => {
    event.preventDefault();
    createProduct(formData)
  }

  return (
    <Form
      fields={fields}
      initialState={initialState}
      onSubmit={handleCreateProduct}
    />
  )
}

export default CreateProduct