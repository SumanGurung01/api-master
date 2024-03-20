import React, { useEffect, useRef, memo } from "react";
import { setupEditorRequest } from "../editor/editor";

var requestJsonRef;
var requestJson;

export function getRequestJSON() {
  return requestJson();
}

function Json() {
  requestJsonRef = useRef();

  useEffect(() => {
    const { returnRequestJson } = setupEditorRequest(requestJsonRef);
    requestJson = returnRequestJson;
  }, [requestJsonRef]);

  return (
    <div>
      JSON
      <div ref={requestJsonRef}></div>
    </div>
  );
}

export default memo(Json);
