import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { isEmail, isPasswordValid } from "../../utils/strings";
import { signIn, signUp } from "../../service/supabase";

export default function SignUp() {
  const navigate = useNavigate();

  const { user, setUser, saveUser } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    avatar: "",
    email: "",
    password: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleInputsChange = (event) => {
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = inputs;

    if (!isEmail(email) || !isPasswordValid(password)) {
      setIsValidEmail(!isEmail(email));
      setIsValidPassword(!isPasswordValid(password));
      return;
    }

    setIsValidEmail(false);
    setIsValidPassword(false);
  };

  if (user) navigate("/home");

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="artboard-demo phone-2 p-6">
          <h1 className="text-2xl">Sign up</h1>
          <p className="mt-6 text-gray-900 font-light">
            Registrarte y comparte todo tu conocimiento.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col gap-5" noValidate>
            <div>
              <input
                type="text"
                value={inputs.avatar}
                name="avatar"
                onChange={handleInputsChange}
                placeholder="Paste your avatar"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50"
              />
            </div>
            <div>
              <input
                type="text"
                value={inputs.name}
                name="name"
                onChange={handleInputsChange}
                placeholder="Type your name"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50"
              />
            </div>
            <div>
              <input
                type="text"
                value={inputs.lastname}
                name="lastname"
                onChange={handleInputsChange}
                placeholder="Type your lastname"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50"
              />
            </div>
            <div>
              <input
                type="email"
                value={inputs.email}
                name="email"
                onChange={handleInputsChange}
                placeholder="Type your email"
                className={`border ${
                  isValidEmail ? "border-red-500" : "border-gray-300 "
                }  rounded-lg p-3 w-full bg-gray-50`}
              />
              {isValidEmail && (
                <span className="text-red-500 mt-2 text-sm">
                  Ingresa un correo valido
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                value={inputs.password}
                name="password"
                onChange={handleInputsChange}
                placeholder="Type your password"
                className={`border ${
                  isValidPassword ? "border-red-500" : "border-gray-300"
                }   rounded-lg p-3 w-full bg-gray-50`}
              />
              {isValidPassword && (
                <span className="text-red-500 mt-2 text-sm">
                  Ingresa un password valido
                </span>
              )}
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
