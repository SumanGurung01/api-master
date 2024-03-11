import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 text-zinc-900">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/get-started"} element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
