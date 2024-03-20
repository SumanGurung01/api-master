import React, { useEffect, useRef, memo } from "react";
import { setupEditorRequest } from "../editor/editor";

var requestJsonRef;
var requestJson;

export function getRequestJSON() {
  return requestJson();
}

function RequestJson() {
  requestJsonRef = useRef();

  useEffect(() => {
    const { returnRequestJson } = setupEditorRequest(requestJsonRef);
    requestJson = returnRequestJson;
  }, [requestJsonRef]);

  return <div ref={requestJsonRef}></div>;
}

export default memo(RequestJson);
