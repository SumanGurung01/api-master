import React from "react";
import { methods } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import Query from "./Query";
import { generateUrlFromParams } from "../utils/libs";

function Main() {
  const { url, params } = useSelector((state) => state);

  const dispatch = useDispatch();

  //function to set method
  function handleMethod(e) {
    dispatch({ type: "SET_METHOD", payload: e.target.value });
  }

  //function to handleRequest
  async function handleRequest() {
    var paramsURL = generateUrlFromParams(params);
    var finalURL = paramsURL !== "" ? `${url}?${paramsURL}` : url;

    var status;
    const start = Date.now();

    await fetch(finalURL)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((result) => console.log(result));

    const end = Date.now();
    const time = end - start;

    dispatch({ type: "SET_DETAIL", payload: { status: status, time: time } });
  }

  function handleURL(e) {
    dispatch({ type: "SET_URL", payload: e.target.value });
  }

  return (
    <div className="">
      <div className="flex w-full items-center justify-center">
        <select
          className="cursor-pointer rounded-l-md border-[1px] border-zinc-200 p-2 outline-none"
          onChange={handleMethod}
        >
          {methods.map((method) => (
            <option value={method} key={method}>
              {method}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="max-w-xl flex-1 bg-zinc-50 py-2 pl-3 outline-none"
          placeholder="https://example.com/"
          onChange={handleURL}
        />

        <button
          className="rounded-r-md bg-pink-500 px-6 py-2 text-zinc-100"
          onClick={handleRequest}
        >
          Send
        </button>
      </div>

      <Query />
    </div>
  );
}

export default Main;
