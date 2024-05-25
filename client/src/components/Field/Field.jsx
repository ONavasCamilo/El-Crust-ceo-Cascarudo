import Input from "./Input";
import Radio from "./Radio";

const Field = ({
  type,
  placeholder,
  name,
  onChange,
  label,
  value,
  options,
  required,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {
        type === "radio" ?
          options?.map(option => (
            <Radio
              key={option.value}
              name={name}
              option={option}
              value={value}
              onChange={onChange}
              required={required}
            />
          ))
          : // if not type radio
          <Input
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            required={required}
            type={type}
          />
      }
    </>
  );
};

export default Field;
