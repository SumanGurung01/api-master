import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar mb-6 flex w-full items-center justify-between border-b-2 py-4 text-lg">
      <p>API Master</p>

      <ul className="flex items-center justify-center gap-6">
        <li>
          <Link to={"/"} className="flex gap-2">
            <Home />
            <p className="hidden md:block">Home</p>
          </Link>
        </li>

        <li className="rounded-md bg-pink-500 px-4 py-2 text-zinc-100">
          <Link to={"/get-started"}> Get Started</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
