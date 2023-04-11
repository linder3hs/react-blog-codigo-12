import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Home() {
  return (
    <>
      <div className="p-10 bg-gray-200">
        <div className="artboard-demo phone-2 p-6">
          <h1 className="text-2xl">
            Escribe un post y comparte tu conocimiento!
          </h1>
          <div className="mt-10">
            <CKEditor editor={ClassicEditor} />
          </div>
        </div>
      </div>
    </>
  );
}
