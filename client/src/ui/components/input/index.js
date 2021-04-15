const Input = (props) => {
  return (
    <input
      type="text"
      className={`border border-gray-200 rounded-md px-2 ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
