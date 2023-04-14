import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateUser } from "../../service/supabase";

export default function Profile() {
  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    avatar: "",
    name: "",
    lastname: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchUpdateUser = async () => {
    const response = await updateUser(user.id, values);
    console.log("response", response);
  };

  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="w-3/4 lg:w-1/4 m-auto pt-10">
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
                  name="avatar"
                  value={values.avatar}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type your name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type your lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="input input-bordered w-full"
                  placeholder="Type your email"
                />
                <button
                  onClick={fetchUpdateUser}
                  className="bg-gray-800 text-white rounded-md p-3 text-xl"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
