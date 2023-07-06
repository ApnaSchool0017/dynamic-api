import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function ApiCall() {
    try {
      const response = await axios.get("http://localhost:5001/users");
      setUsers(response.data);
    } catch (error) {
      setError("Error loading users.");
    }
  }

  useEffect(() => {
    ApiCall();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:5001/users/${id}`);
      ApiCall();
    } catch (error) {
      setError("Error deleting user.");
    }
  }

  return (
    <>
      <div className="w-full h-[100vh] ">
        <div className="mx-auto px-12 py-8">
          <h1 className="text-3xl font-bold mb-2">Users</h1>
          {users.length === 0 ? (
            <p className="font-semibold text-center text-xl p-6 ">No users available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-white flex items-center flex-col rounded-lg shadow-lg pb-2 border-purple-400 border-[1px]"
                >
                  <div className=" rounded-full py-4 px-6 mb-4 mt-2 bg-purple-500">
                    <h3 className="font-semibold text-white ">
                     {user.id}
                    </h3>
                  </div>
                  <div className="mb-4 flex flex-col items-center">
                    <h2 className=" font-bold mb-2 text-2xl">
                       {user.name}
                    </h2>
                    <div className="border-[1px] w-40 border-gray-300"></div>
                  </div>
                  <div className="mb-2 w-full px-6 gap-2 flex flex-col">
                    <Link
                      to={`/users/${user.id}`}
                      className="bg-teal-600 text-white text-center w-full py-2 rounded-lg"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="bg-blue-600 text-white text-center w-full py-2 rounded-lg"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
