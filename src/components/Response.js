import React, { useMemo, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { setupEditorResponse } from "../editor/editor";
import { statusCodes } from "../utils/constant.js";

function Response() {
  const responseDetail = useSelector((state) => state.responseDetail);
  const response = useSelector((state) => state.response);
  const headers = useSelector((state) => state.headers);
  const responseRef = useRef();

  useMemo(() => {
    if (!responseRef.current) return;
    responseRef.current.innerHTML = "";
    const { updateResponse } = setupEditorResponse(responseRef);
    updateResponse(response);
  }, [response]);

  const getBackgroundColor = () => {
    if (responseDetail.status) {
      const { status } = responseDetail;
      if (status >= 100 && status < 200) return "bg-sky-400";
      if (status >= 200 && status < 300) return "bg-green-500";
      if (status >= 300 && status < 400) return "bg-yellow-400";
      if (status >= 400 && status < 500) return "bg-red-400";
      if (status >= 500) return "bg-rose-800";
    }
  };

  const bgColor = getBackgroundColor();

  return (
    <div className="my-16">
      {responseDetail.status !== 0 && (
        <div>
          <p className="my-2 text-xl font-bold">Response</p>

          <div className="my-2 flex gap-10">
            <div className="flex items-center gap-2">
              <p>Status:</p>
              <div className={`h-4 w-4 rounded-full ${bgColor}`}></div>
              <p>{`${responseDetail.status} ${
                statusCodes[responseDetail.status].description
              }`}</p>
              <p className="font-semibold">{`${statusCodes[responseDetail.status].category}`}</p>
            </div>
            <p>Time: {responseDetail.time}ms</p>
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-3xl flex-1" ref={responseRef}></div>
        {headers.length > 0 && (
          <div className="ml-0 mt-10 max-w-lg lg:ml-10 lg:mt-[-70px]">
            <p className="my-2 text-xl font-bold">Headers</p>
            <div>
              <table>
                <tbody>
                  {headers.map((header) => (
                    <tr key={header[0]}>
                      <td className="font-semibold">{`${header[0]}`}</td>
                      <td className="pl-2">{`: ${header[1]}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Response);
