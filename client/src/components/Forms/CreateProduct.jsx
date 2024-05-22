import Form from "./Form"
import Field from '../Field/Field';
import { useState } from "preact/hooks";
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
      { value: "food", label: "Food" },
      { value: "drink", label: "Drink" }
    ]
  },
]

const CreateProduct = () => {
  const { createProduct, products } = useProducts()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: ""
  });

  const handleCreateProduct = (e) => {
    e.preventDefault();
    createProduct(formData)
    console.log("creando producto", products.data)
  }

  const handleInputChange = (e) => {
    setFormData((oldState) => ({ ...oldState, [e.target.name]: e.target.value }))
  }

  return (
    <Form title={"Crear Producto"}>
      {fields.map(input => {
        return (
          <Field
            key={input.name}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={formData[input.name]}
            label={input.label}
            onChange={handleInputChange}
            options={input.options}
          />
        )
      })}
      <button onClick={handleCreateProduct}>Crear Producto</button>
      {/* {loginError && <p>{loginError.response.data.message}</p>} */}
    </Form>
  )
}

export default CreateProduct