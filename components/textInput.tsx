import { v4 as uuid } from "uuid";

type Props = {
  value: string;
  placeholder: string;
  onInput: Function;
};

const TextInput = ({ placeholder, onInput, value }: Props) => {
  const id = uuid();

  return (
    <div className="relative m-6">
      <input
        id={id}
        type="text"
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
        placeholder={placeholder}
        onInput={(e) => onInput((e.target as HTMLInputElement).value)}
        value={value}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
