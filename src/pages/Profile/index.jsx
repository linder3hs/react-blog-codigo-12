import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="w-1/4 m-auto pt-10">
          <div className="artboard-demo phone-2 p-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://avatars.githubusercontent.com/u/20673011?v=4"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10 w-full">
              <div className="w-full flex flex-col gap-5">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type your image link"
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type your name"
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type your lastname"
                />
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="input input-bordered w-full"
                  placeholder="Type your email"
                />
                <button className="bg-gray-800 text-white rounded-md p-3 text-xl">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
