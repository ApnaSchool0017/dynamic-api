import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-white shadow-lg">
            <Link to={"/"} className="text-3xl text-purple-500 font-bold font-Montesarrat">Dynamic Api</Link>
            <Link to={"/add-user"} className="hover:bg-white
            hover:border-2 hover:border-purple-500 hover:text-purple-500 hover:shadow-md rounded-lg bg-purple-500 font-bold text-white py-2 px-2">Add Users</Link>
        </div>
    </>
  )
}

export default Navbar