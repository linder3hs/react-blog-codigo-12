import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Home() {
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    console.log(content);
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
