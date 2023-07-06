import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const data = {
    name: name,
    email: email,
    phone: phone,
    description: description,
  };

  async function submitForm(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/users", data);
      navigate("/");
    } catch (error) {
      setError("Error adding user.");
    }
  }

  return (
    <div className=" flex justify-center items-center my-12 ">
      <div className="flex flex-col shadow-lg  w-[50%] bg-slate-50  rounded-lg">
        <div>
          <h2 className="text-2xl font-bold text-white bg-purple-500 text-center py-2 rounded-tr-lg rounded-tl-lg">ADD USER</h2>
          {error && <div className="text-red-600 font-bold mt-4">{error}</div>}
        </div>
        <div className="w-full px-4 ">
          <form className="w-full h-full flex flex-col mt-2 ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" rounded-full shadow-lg  outline-none font-normal  py-2 pl-4 mx-8 mt-4"
              type="text"
              placeholder="Enter your name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full shadow-lg  outline-none font-normal  py-2 pl-4 mx-8 mt-4"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-full shadow-lg  outline-none font-normal  py-2 pl-4 mx-8 mt-4"
              type="phone"
              placeholder="Enter your phone no."
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-lg shadow-lg  outline-none font-normal  py-2 pl-4 mx-8 mt-4"
              type="text"
              placeholder="description."
            />
            <button
              className="bg-purple-500 hover:bg-purple-600 outline-none font-bold text-white mx-40 rounded-full  py-4 pl-4 mt-6 mb-8"
              type="submit"
              onClick={submitForm}
            >
              ADD USER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
