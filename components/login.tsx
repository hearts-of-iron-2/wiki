import { useState } from "react";

type Props = {
  success: Function;
};

const LoginComponent = ({ success }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(username, password);
    success();
  };

  return (
    <div className="grid place-items-center w-full h-full">
      <form className="mt-12">
        <div className="relative">
          <input
            type="text"
            onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
            placeholder="Username"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Username
          </label>
        </div>
        <div className="mt-10 relative">
          <input
            type="password"
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Password
          </label>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-accent m-10"
        >
          Sign in/Register
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
