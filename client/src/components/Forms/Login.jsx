import { useState } from 'preact/hooks';
import Field from '../Field/Field';
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
    type: "password",
    placeholder: "*********",
    name: "password",
    label: "Contraseña"
  },
]

const Login = () => {
  const { login, loginError } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormData((oldState) => ({ ...oldState, [e.target.name]: e.target.value }))
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData);
  }

  return (
    <FormContainer title={"Iniciar Sesión"}>
      <Form>
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
        <p>Olvidé mi contraseña</p>
        <button onClick={handleLogin}>Iniciar Sesión</button>
        {loginError && <p>{loginError.response.data.message}</p>}
      </Form>
    </FormContainer>
  )
}

export default Login