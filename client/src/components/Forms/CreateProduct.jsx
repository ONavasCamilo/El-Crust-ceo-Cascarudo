import Form from "./Form"
import Field from '../Field/Field';
import { useState } from "preact/hooks";

const fields = [
  {
    type: "text",
    placeholder: "Coca Cola",
    name: "product",
    label: "Nombre del Producto"
  },
  {
    type: "number",
    placeholder: "50",
    name: "stock",
    label: "Stock"
  },
]

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleCreateProduct = (e) => {
    e.preventDefault();
    console.log("creando produto")
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
          />
        )
      })}
      <button onClick={handleCreateProduct}>Crear Producto</button>
      {/* {loginError && <p>{loginError.response.data.message}</p>} */}
    </Form>
  )
}

export default CreateProduct