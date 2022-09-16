type InputComponentProps = {
  placeholder: string;
  width?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  props?: any;
};

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  width = "w-full",
  type = "text",
  onChange,
  props,
}) => {
  const inputStyles = `px-6 h-[44px] bg-white bg-opacity-5 rounded-lg text-[#A2A3A4] placeholder:text-[#A2A3A4] focus:outline-none ${width}`;

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className={inputStyles}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputComponent;
