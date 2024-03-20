import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import RequestJson from "./components/RequestJson";
import RequestQuery from "./components/RequestQuery";

function App() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 text-zinc-900">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/get-started"} element={<Main />}>
          <Route path={"/get-started"} element={<RequestQuery />} />
          <Route path={"/get-started/json"} element={<RequestJson />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
