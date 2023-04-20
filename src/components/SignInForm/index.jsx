import { Link } from "react-router-dom";
import { elements } from "./elements";
import { TextField, SubmitButton, GithubButton } from "../../components";

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
        <GithubButton text="Sign in with Github" />
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
