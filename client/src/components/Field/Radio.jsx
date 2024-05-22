const Radio = ({ option, name, value, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={value === option.value}
        onChange={onChange}
      />
      {option.label}
    </label>
  )
}

export default Radio