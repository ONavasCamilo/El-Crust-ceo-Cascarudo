import style from "./Field.module.css";

const Input = ({
  type,
  placeholder,
  name,
  onChange,
  label,
  value,
  options,
}) => {
  if (type === "radio") {
    return (
      <>
        <label>{label}</label>
        {options.map(option => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={style.input}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
