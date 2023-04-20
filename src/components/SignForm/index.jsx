import { Link } from "react-router-dom";
import { signInWithGithub } from "../../service/supabase";
import { elements } from "./elements";
import { TextField, SubmitButton } from "../../components";
import github from "../../assets/github.svg";

export default function SignForm(props) {
  const { handleSubmit, inputs, handleInputsChange, isValid } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-10 w-full" noValidate>
        <TextField
          elements={elements}
          inputs={inputs}
          isValid={isValid}
          handleInputsChange={handleInputsChange}
        />
        <SubmitButton text="Sign in" />
        <div className="mt-6">
          <button
            type="button"
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
