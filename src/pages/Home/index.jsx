import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MDEditor from "@uiw/react-md-editor";
import { post } from "../../service/mockapi";
import Swal from "sweetalert2";

export default function Home() {
  const { user } = useContext(AuthContext);

  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    if (!content) return;

    const data = {
      user_id: user.id,
      content,
    };
    await post(data);
    setContent("");
    Swal.fire({
      text: "Post creado correctamente",
      icon: "success",
    });
  };

  return (
    <>
      <div className="p-10 bg-gray-200">
        <div className="artboard-demo phone-2 p-6">
          <h1 className="text-2xl">
            Escribe un post y comparte tu conocimiento!
          </h1>
          <div className="mt-10 w-full">
            <MDEditor value={content} onChange={setContent} />
          </div>
          <div className="mt-10">
            <button onClick={handleCreatePost} className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
