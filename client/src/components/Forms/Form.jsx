import style from './Form.module.css'

const Form = ({ children, fields }) => {
  return (
    <form className={style.form}>
      {children}
    </form>
  )
}

export default Form