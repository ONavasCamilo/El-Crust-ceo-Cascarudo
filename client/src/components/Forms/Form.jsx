import { useState } from 'preact/hooks';
import Field from '../Field/Field'
import style from './Form.module.css'

const Form = ({ fields, initialState, onSubmit, errors, submitButtonText }) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    setFormData((oldState) => ({ ...oldState, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={(event) => onSubmit({ event, formData })} className={style.form}>
      {fields.map(field => {
        return (
          <Field
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={formData[field.name]}
            label={field.label}
            onChange={handleInputChange}
            options={field.options}
            required={field.required}
          />
        )
      })}
      <button>{submitButtonText || "Aceptar"}</button>
      {errors?.some(er => er != null) && errors.map(error => {
        return <p key={error.response.data.message}>{error.response.data.message}</p>
      }
      )}
    </form>
  )
}

export default Form