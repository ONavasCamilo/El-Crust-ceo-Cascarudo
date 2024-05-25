import { loginFields, loginInitialState } from '../../config/formConfig';
import useAuth from '../../hooks/useAuth';
import Form from './Form';
import FormContainer from './FormContainer';

const Login = () => {
  const { login, loginError } = useAuth();

  const handleLogin = ({ event, formData }) => {
    event.preventDefault();
    login(formData);
  }

  return (
    <FormContainer title={"Iniciar Sesión"}>
      <Form
        fields={loginFields}
        initialState={loginInitialState}
        onSubmit={handleLogin}
        errors={[loginError]}
      />
    </FormContainer>
  )
}

export default Login