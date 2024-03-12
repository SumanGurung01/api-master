import React, { useEffect, useState } from "react";
import { generateRandomID } from "../utils/libs";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function Query() {
  const params = useSelector((state) => state.params);
  const dispatch = useDispatch();

  function addParams() {
    dispatch({
      type: "ADD_PARAMS",
      payload: { id: generateRandomID(), key: "", value: "" },
    });
  }

  function deleteParam(idx) {
    const newParams = params.filter((param) => param.id !== idx);
    dispatch({
      type: "DELETE_PARAMS",
      payload: newParams,
    });
  }

  function setParams(e, field, idx) {
    const newParams = params.map((param) => {
      if (param.id == idx) {
        field === "key"
          ? (param.key = e.target.value)
          : (param.value = e.target.value);
      }
      return param;
    });

    dispatch({
      type: "SET_PARAMS",
      payload: newParams,
    });
  }

  return (
    <div>
      {params.map((param) => (
        <div key={param.id} className="my-2 flex gap-2">
          <input
            type="text"
            placeholder="key"
            className="border-[1px] px-2 py-2 outline-none"
            onChange={(e) => setParams(e, "key", param.id)}
          />
          <input
            type="text"
            placeholder="value"
            className="border-[1px] px-2 py-2 outline-none"
            onChange={(e) => setParams(e, "value", param.id)}
          />
          <button onClick={() => deleteParam(param.id)}>
            <Trash size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={addParams}
        className="rounded-md border-[1px] border-pink-500 px-4 py-2 text-pink-500"
      >
        Add Input
      </button>
    </div>
  );
}

export default Query;
