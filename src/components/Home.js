import React from "react";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={require("../assets/api-testing.png")}
        alt="banner"
        className="w-full rounded-xl object-cover md:h-[600px] md:brightness-50"
      />

      <div className="max-w-3xl md:absolute md:text-zinc-100">
        <p className="mt-10 text-center text-3xl font-semibold md:text-5xl">
          Explore, Build, & Test APIs with{" "}
          <span className="text-pink-500 md:text-pink-400">API Master.</span>
        </p>

        <p className="mt-6 text-center text-lg md:text-xl">
          Building and testing API made easy
        </p>

        <button className="text-zinc-10 mx-auto my-10 flex rounded-md bg-pink-500 p-2 px-4 text-lg text-zinc-100">
          <Link
            to={"/get-started"}
            className="flex items-center justify-center gap-2"
          >
            <p>Try for free</p>
            <ArrowRight size={20} />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
