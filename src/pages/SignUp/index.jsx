import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { isEmail, isPasswordValid } from "../../utils/strings";
import { signUp } from "../../service/supabase";
import { Card, SingUpForm } from "../../components";
import Swal from "sweetalert2";

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

  const [isValid, setIsValid] = useState({
    isValidEmail: false,
    isValidPassword: false,
  });

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
      setIsValid({
        isValidEmail: !isEmail(email),
        isValidPassword: !isPasswordValid(password),
      });
      return;
    }

    setIsValid({
      isValidEmail: false,
      isValidPassword: false,
    });

    const userData = {
      email: inputs.email,
      password: inputs.password,
      options: {
        data: {
          name: inputs.name,
          lastname: inputs.lastname,
          avatar: inputs.avatar,
        },
      },
    };

    const user = await signUp(userData);

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
        <Card>
          <h1 className="text-2xl">Sign up</h1>
          <p className="mt-6 text-gray-900 font-light">
            Registrarte y comparte todo tu conocimiento.
          </p>
          <SingUpForm
            handleSubmit={handleSubmit}
            inputs={inputs}
            handleInputsChange={handleInputsChange}
            isValid={isValid}
          />
        </Card>
      </div>
    </>
  );
}
