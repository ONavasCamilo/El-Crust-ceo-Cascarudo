import style from './Field.module.css'

const Input = ({ type, placeholder, name, onChange, label, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className={style.input} type={type} value={value} placeholder={placeholder} name={name} onChange={onChange} />
    </>
  )
}

export default Input