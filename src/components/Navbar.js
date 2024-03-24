import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-6 flex w-full items-center justify-between border-b-2 py-4 text-lg">
      <Link to={"/"} className="text-xl font-bold text-zinc-800">
        API Master<span className="text-3xl text-violet-500">.</span>
      </Link>

      <Link
        to={"/get-started"}
        className="rounded-md px-4 py-2 text-violet-500 duration-300 hover:bg-violet-50"
      >
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;
