import { TextField } from "../../components";
import { elements } from "./elements";
export default function ProfileForm(props) {
  const { values, handleInputChange } = props;

  return (
    <>
      <TextField
        elements={elements}
        inputs={values}
        handleInputsChange={handleInputChange}
      />
    </>
  );
}
