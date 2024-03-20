import React from "react";
import { methods } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { generateUrlFromParams } from "../utils/libs";
import Response from "./Response";
import { getRequestJSON } from "./RequestJson";
import { Link, Outlet, useLocation } from "react-router-dom";

function Main() {
  const method = useSelector((state) => state.method);
  const url = useSelector((state) => state.url);
  const params = useSelector((state) => state.params);
  const location = useLocation();

  const dispatch = useDispatch();

  //function to set method
  function handleMethod(e) {
    dispatch({ type: "SET_METHOD", payload: e.target.value });
  }

  var headersArray;

  //function to handleRequest
  async function handleRequest() {
    // Check if URL is empty
    if (url === "") {
      alert("Enter URL");
      return;
    }

    let error = false;

    // Generate URL parameters string
    const paramsURL = generateUrlFromParams(params);

    let requestJSON;
    try {
      // Parse request JSON
      requestJSON = JSON.parse(getRequestJSON().text.join(""));
    } catch {
      error = true;
      alert("Invalid JSON");
    }

    if (error) {
      // Handle error
      resetState();
      return;
    }

    // Set request JSON
    dispatch({ type: "SET_REQUEST_JSON", payload: requestJSON });

    // Concatenate URL with parameters
    const finalURL = `${url}?${paramsURL}`;

    let status;
    const start = Date.now();

    try {
      const response = await fetch(finalURL, {
        method: method,
        headers: method === "GET" ? {} : { "Content-Type": "application/json" },
        body: method === "GET" ? undefined : JSON.stringify(requestJSON),
      });

      status = response.status;

      if (status === 200) {
        // Set headers if status is 200
        const headers = response.headers;
        dispatch({ type: "SET_HEADERS", payload: [...headers.entries()] });
      }

      const result = await response.json();
      // Set response
      dispatch({ type: "SET_RESPONSE", payload: result });
    } catch (err) {
      alert("Couldn't resolve the hostname to an IP address");
      error = true;
    }

    const end = Date.now();
    const time = end - start;

    if (error) {
      // Handle error
      resetState();
    } else {
      // Set detail with status and time
      dispatch({ type: "SET_DETAIL", payload: { status: status, time: time } });
    }
  }

  // Reset state
  function resetState() {
    dispatch({ type: "SET_DETAIL", payload: { status: 400, time: 0 } });
    dispatch({ type: "SET_RESPONSE", payload: {} });
    dispatch({ type: "SET_HEADERS", payload: [] });
  }

  function handleURL(e) {
    dispatch({ type: "SET_URL", payload: e.target.value });
  }

  return (
    <div>
      {/* https://jsonplaceholder.typicode.com/todos :
      https://api.agify.io?name=suman */}
      <div className="my-10 flex w-full items-center justify-center">
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
          className="w-full flex-1 bg-zinc-50 px-3 py-2 outline-none"
          placeholder="https://example.com/"
          onChange={handleURL}
        />

        <button
          className="rounded-r-md bg-pink-500 px-4 py-2 text-zinc-100 md:px-6"
          onClick={handleRequest}
        >
          Send
        </button>
      </div>
      <div className="my-10 mb-6 flex gap-10">
        <Link
          to={"/get-started"}
          className={
            location.pathname === "/get-started"
              ? "border-b-2 border-pink-600"
              : ""
          }
        >
          Query
        </Link>
        <Link
          to={"/get-started/json"}
          className={
            location.pathname === "/get-started/json"
              ? "border-b-2 border-pink-600"
              : ""
          }
        >
          JSON
        </Link>
      </div>
      <Outlet />
      <Response />
    </div>
  );
}

export default Main;
