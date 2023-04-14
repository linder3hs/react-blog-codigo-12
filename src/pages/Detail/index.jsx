import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../service/mockapi";
import MDEditor from "@uiw/react-md-editor";

export default function Detail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const response = await get(id);
    setPost(response);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="w-2/4 p-6 m-auto mt-10">
        {post && <MDEditor.Markdown source={post.content} />}
      </div>
    </>
  );
}
