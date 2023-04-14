import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { get } from "../../service/mockapi";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await get();
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="p-12 w-2/4 m-auto">
        <section>
          <div className="flex items-center">
            <img
              width="30"
              className="rounded-full"
              src="https://www.linderhassinger.info/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20673011%3Fv%3D4&w=640&q=75"
              alt="Linder Hassinger"
            />
            <span className="font-light">
              &nbsp;&nbsp;Linder Hassinger . Mar 14 ⭐️ Member only
            </span>
          </div>
          <div className="mt-5 flex">
            <div>
              <h1 className="text-2xl font-bold">
                NodeJS 18 is HERE! 3 Features that will blow your mind 🤯
              </h1>
              <p className="w-3/4 mt-3">
                Stanalone Test Runner, Fetch (Experimental) Support, V8 Engine
                (not a car) and more! — NodeJS has released the new version of
                NodeJS.
              </p>
            </div>
            <div>
              <img
                src="https://miro.medium.com/v2/resize:fill:224:224/1*pe8pnghz2vphnNjT39uiHg.jpeg"
                alt=""
              />
            </div>
          </div>
        </section>
        <hr className="mt-5" />
      </div>
    </>
  );
}
