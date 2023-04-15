import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { isEmail, isPasswordValid } from "../../utils/strings";
import { signIn } from "../../service/supabase";
import Swal from "sweetalert2";

export default function SignIn() {
  const navigate = useNavigate();

  const { user, setUser, saveUser } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
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

    const user = await signIn(inputs);

    if (!user.ok) {
      Swal.fire({
        text: user.error.message,
        icon: "error",
      });
      return;
    }
    
    saveUser(user.data.user);
    setUser(user.data.user);
  };

  if (user) navigate("/home");

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="artboard-demo phone-2 p-6">
          <h1 className="text-2xl">Sign in with email</h1>
          <p className="mt-6 text-gray-900 font-light">
            Enter the email address associated with your account.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 w-full" noValidate>
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
            <div className="mt-6">
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
                Sign in
              </button>
            </div>
            <div className="mt-6 text-center">
              <span>
                Eres nuevo?{" "}
                <Link className="text-blue-600" to={"/signup"}>
                  Registrate
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
