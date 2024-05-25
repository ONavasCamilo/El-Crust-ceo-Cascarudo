import { registerFields, registerInitialState } from '../../config/formConfig';
import useAuth from '../../hooks/useAuth';
import Form from './Form';
import FormContainer from './FormContainer';

const Register = () => {
  const { register, registerError } = useAuth();

  const handleLogin = ({ event, formData }) => {
    event.preventDefault();
    register(formData);
  }

  return (
    <FormContainer title={"Registrarse"}>
      <Form
        fields={registerFields}
        initialState={registerInitialState}
        onSubmit={handleLogin}
        errors={[registerError]}
      />
    </FormContainer>
  )
}

export default Register;