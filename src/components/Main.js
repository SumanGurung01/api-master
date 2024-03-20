import React from "react";
import { methods } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import Query from "./RequestQuery";
import { generateUrlFromParams } from "../utils/libs";
import Response from "./Response";
import Json, { getRequestJSON } from "./RequestJson";

function Main() {
  console.log("Main");
  const method = useSelector((state) => state.method);
  const url = useSelector((state) => state.url);
  const params = useSelector((state) => state.params);

  const dispatch = useDispatch();

  //function to set method
  function handleMethod(e) {
    dispatch({ type: "SET_METHOD", payload: e.target.value });
  }

  //function to handleRequest
  async function handleRequest() {
    // if empty url then return
    if (url === "") {
      alert("Enter URL");
      return;
    }

    var error = false;
    // generate param url string => eg: name=user&age=10
    var paramsURL = generateUrlFromParams(params);

    // get the request json
    var requestJSON;
    try {
      requestJSON = JSON.parse(getRequestJSON().text.join(""));
    } catch {
      error = true;
      alert("Invalid JSON");
    }

    if (error) {
      dispatch({ type: "SET_DETAIL", payload: { status: 400, time: 0 } });
      dispatch({ type: "SET_RESPONSE", payload: {} });
      return;
    }

    dispatch({
      type: "SET_REQUEST_JSON",
      payload: requestJSON,
    });

    // concat main url and query params
    var finalURL = `${url}?${paramsURL}`;

    var status;
    const start = Date.now();

    if (method === "GET") {
      await fetch(finalURL)
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((result) => {
          dispatch({ type: "SET_RESPONSE", payload: result });
        })
        .catch((err) => {
          alert("Couldn't resolve the hostname to an IP address");
          error = true;
          dispatch({ type: "SET_DETAIL", payload: { status: 400, time: 0 } });
        });
    } else {
      await fetch(finalURL, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestJSON),
      })
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((result) => {
          dispatch({ type: "SET_RESPONSE", payload: result });
        })
        .catch((err) => {
          alert("Couldn't resolve the hostname to an IP address");
          error = true;
        });
    }

    const end = Date.now();
    const time = end - start;

    if (error) {
      dispatch({ type: "SET_DETAIL", payload: { status: 400, time: 0 } });
      dispatch({ type: "SET_RESPONSE", payload: {} });
    } else {
      dispatch({ type: "SET_DETAIL", payload: { status: status, time: time } });
    }
  }

  function handleURL(e) {
    dispatch({ type: "SET_URL", payload: e.target.value });
  }

  return (
    <div>
      https://jsonplaceholder.typicode.com/todos :
      https://api.agify.io?name=suman
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
      <Json />
      <Response />
    </div>
  );
}

export default Main;
