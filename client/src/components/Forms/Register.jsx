import useAuth from '../../hooks/useAuth';
import Form from './Form';
import FormContainer from './FormContainer';

const fields = [
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
]

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const Register = () => {
  const { register, registerError } = useAuth();

  const handleLogin = ({ event, formData }) => {
    event.preventDefault();
    register(formData);
  }

  return (
    <FormContainer title={"Registrarse"}>
      <Form
        fields={fields}
        initialState={initialState}
        onSubmit={handleLogin}
        errors={[registerError]}
      />
    </FormContainer>
  )
}

export default Register;