import style from './Form.module.css'

const Form = ({ title, children }) => {
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <h2 className={style.title}>{title}</h2>
        <form className={style.form}>
          {children}
        </form>
      </div>
    </section>
  )
}

export default Form