import { TextField, SubmitButton, GithubButton } from "../../components";
import { elements } from "./elements";

export default function SingUpForm(props) {
  const { handleSubmit, inputs, handleInputsChange, isValid } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col" noValidate>
        <TextField
          elements={elements}
          inputs={inputs}
          handleInputsChange={handleInputsChange}
          isValid={isValid}
        />
        <SubmitButton text="Sign up" />
        <span className="mt-4 text-center font-light text-sm">O ingresa con tu cuenta de Github</span>
        <GithubButton text="Sign up with Github" />
      </form>
    </>
  );
}
