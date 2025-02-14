/* eslint-disable react/prop-types */

const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className="textField__input"
        type="text"
        autoComplete="false"
      />
    </div>
  );
};

export default TextField;
