import { Link } from "react-router-dom";
import { signInWithGithub } from "../../service/supabase";
import github from "../../assets/github.svg";

export default function SignForm(props) {
  const {
    handleSubmit,
    inputs,
    handleInputsChange,
    isValidEmail,
    isValidPassword,
  } = props;
  return (
    <>
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
        <div className="mt-6">
          <button
            onClick={signInWithGithub}
            className="bg-gray-950 w-full flex items-center justify-center p-2.5 text-white gap-3 rounded-md"
          >
            <img src={github} width={30} alt="" />
            <span>Sign in with Github</span>
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
    </>
  );
}
