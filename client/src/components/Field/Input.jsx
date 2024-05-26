import style from './Field.module.css'

const Input = ({ type, value, name, placeholder, onChange, required }) => {
  return (
    <input
      className={style.input}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      required={required}
      id={name}
    />
  )
}

export default Input