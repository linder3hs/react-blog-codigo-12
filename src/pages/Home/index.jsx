import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MDEditor from "@uiw/react-md-editor";
import { post } from "../../service/mockapi";
import { Card, PostForm } from "../../components";
import Swal from "sweetalert2";

export default function Home() {
  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    title: "",
    resume: "",
    cover: "",
    content: "",
    user_id: user.id,
    user_avatar: user.user_metadata.avatar,
    user_name: user.user_metadata.name,
    user_lastname: user.user_metadata.lastname,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCreatePost = async () => {
    await post(values);

    setValues({
      title: "",
      resume: "",
      cover: "",
      content: "",
      user_id: user.id,
      user_avatar: user.user_metadata.avatar,
      user_name: user.user_metadata.name,
      user_lastname: user.user_metadata.lastname,
    });

    Swal.fire({
      text: "Post creado correctamente",
      icon: "success",
    });
  };

  return (
    <>
      <div className="p-10 bg-gray-200">
        <Card>
          <h1 className="text-2xl">
            Escribe un post y comparte tu conocimiento!
          </h1>
          <div className="w-full grid grid-cols-2 gap-6">
            <PostForm values={values} handleInputChange={handleInputChange} />
          </div>
          <div className="mt-10 w-full">
            <MDEditor
              value={values.content}
              onChange={(event) => {
                setValues({
                  ...values,
                  content: event,
                });
              }}
            />
          </div>
          <div className="mt-10">
            <button onClick={handleCreatePost} className="btn btn-primary">
              Guardar
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
