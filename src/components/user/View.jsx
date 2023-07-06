import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function View() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/users/${id}`);
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <div className="h-full w-full flex flex-col  justify-center items-center">
        <Link
          to="/"
          className="hover:bg-purple-500 bg-white hover:shadow-md outline-none rounded-xl font-bold border mt-8 hover:text-white text-purple-500 border-purple-400 py-4 px-4 "
        >
          Back To Home
        </Link>
        {error && <div className="text-red-600 font-bold mt-4">{error}</div>}
        <div className="flex w-[750px] py-4">
          <h2 className="font-bold text-2xl text-slate-500">Selected User</h2>
        </div>

        {user && (
          <div className="w-[700px] h-auto px-8 py-8 flex shadow-lg rounded-xl justify-center items-center bg-purple-500  border-purple-500 border">
            <div className="w-5/12 flex flex-col ">
              <h2 className="text-gray-100 font-bold text-3xl pb-4 ">
                Name :
              </h2>
              <h2 className="text-gray-100 font-bold text-3xl pb-4">
                Email :
              </h2>
              <h2 className="text-gray-100 font-bold text-3xl pb-4 ">
                Phone :
              </h2>
              <h2 className="text-gray-100 font-bold text-3xl pb-4 ">
                Description :
              </h2>
            </div>
            <div className="w-7/12 flex flex-col ">
              <h2 className="text-white font-bold text-3xl pb-4 ">
                {user.name}
              </h2>
              <h2 className="text-white font-bold text-3xl pb-4 ">
                {user.email}
              </h2>
              <h2 className="text-white font-bold text-3xl pb-4 ">
                {user.phone}
              </h2>

              <h2 className="text-white font-bold text-3xl pb-4 ">
                {user.description}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default View;
