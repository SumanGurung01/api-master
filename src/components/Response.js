import React from "react";
import { useSelector } from "react-redux";

function Response() {
  const responseDetail = useSelector((state) => state.responseDetail);

  return (
    <div className="mt-10">
      {responseDetail.status != 0 ? (
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
    </div>
  );
}

export default Response;
