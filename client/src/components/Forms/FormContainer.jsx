import style from './Form.module.css'

const FormContainer = ({ title, children }) => {
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <h2 className={style.title}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default FormContainer