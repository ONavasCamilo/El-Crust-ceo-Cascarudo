import { useState } from 'preact/hooks';
import style from './Login.module.css'
import Field from '../Field/Field';
import useAuth from '../../hooks/useAuth';
import { userStore } from '../../store/store';

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
    <section className={style.container}>
      <div className={style.loginContainer}>
        <h2 className={style.title}>Iniciar Sesión</h2>
        <form className={style.formContainer}>
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
        </form>
        {loginError && <p>{loginError.response.data.error}</p>}
      </div>
    </section>
  )
}

export default Login