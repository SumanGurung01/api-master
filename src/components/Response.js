import React, { useMemo, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { setupEditorResponse } from "../editor/editor";

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

  return (
    <div className="my-16">
      {responseDetail.status !== 0 ? (
        <div>
          <p className="my-2 text-xl font-bold">Response</p>

          <div className="my-2 flex gap-10">
            <p>
              Status: {responseDetail.status === 200 ? "🟢" : "🔴"}
              {responseDetail.status}
            </p>
            <p>Time: {responseDetail.time}ms</p>
          </div>
        </div>
      ) : null}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1" ref={responseRef}></div>
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
