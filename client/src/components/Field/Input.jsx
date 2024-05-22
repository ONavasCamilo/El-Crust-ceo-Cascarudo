import style from './Field.module.css'

const Input = ({ type, value, name, placeholder, onChange }) => {
  return (
    <input
      className={style.input}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  )
}

export default Input