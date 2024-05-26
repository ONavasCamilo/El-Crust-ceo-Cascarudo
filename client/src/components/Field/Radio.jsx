const Radio = ({ option, name, value, onChange, required }) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={value === option.value}
        onChange={onChange}
        required={required}
      />
      {option.label}
    </label>
  )
}

export default Radio