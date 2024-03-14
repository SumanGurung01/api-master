import React, { useMemo, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { setupEditor } from "../editor/editor";

function Response() {
  const responseDetail = useSelector((state) => state.responseDetail);
  const response = useSelector((state) => state.response);
  const responseRef = useRef();

  useMemo(() => {
    if (!responseRef.current) return;

    responseRef.current.innerHTML = "";

    const { updateResponse } = setupEditor(responseRef);
    updateResponse(response);
  }, [response]);

  return (
    <div className="mt-10">
      {responseDetail.status !== 0 ? (
        <div>
          <p className="my-2 text-xl font-bold">Response</p>
          <div className="flex gap-10">
            <p>
              Status: {responseDetail.status === 200 ? "🟢" : "🔴"}
              {responseDetail.status}
            </p>
            <p>Time: {responseDetail.time}ms</p>
          </div>
        </div>
      ) : null}
      <div ref={responseRef}></div>
    </div>
  );
}

export default memo(Response);
