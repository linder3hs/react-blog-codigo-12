import { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

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
          <div className="mt-10">
            <CKEditor
              editor={ClassicEditor}
              onChange={(_, editor) => setContent(editor.getData())}
            />
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
