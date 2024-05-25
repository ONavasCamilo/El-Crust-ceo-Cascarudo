import useAuth from '../../hooks/useAuth';
import Form from './Form';
import FormContainer from './FormContainer';

const fields = [
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

const initialState = {
  username: "",
  password: ""
}

const Login = () => {
  const { login, loginError } = useAuth();

  const handleLogin = ({ event, formData }) => {
    event.preventDefault();
    login(formData);
  }

  return (
    <FormContainer title={"Iniciar Sesión"}>
      <Form
        fields={fields}
        initialState={initialState}
        onSubmit={handleLogin}
        errors={[loginError]}
      />
    </FormContainer>
  )
}

export default Login