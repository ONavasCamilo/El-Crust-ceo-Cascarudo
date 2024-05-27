import Form from "./Form"
import useProducts from "@hooks/useProducts";
import FormContainer from './FormContainer';
import { createProductFields, createProductInitialState } from "@config/formConfig";

const CreateProduct = () => {
  const { createProduct } = useProducts();

  const handleCreateProduct = ({ event, formData }) => {
    event.preventDefault();
    createProduct(formData)
  }

  return (
    <FormContainer>
      <Form
        fields={createProductFields}
        initialState={createProductInitialState}
        onSubmit={handleCreateProduct}
      />
    </FormContainer>
  )
}

export default CreateProduct