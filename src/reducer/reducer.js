import { combineReducers } from "redux";
import { generateRandomID } from "../utils/libs";

const methodReducer = (method = "GET", action) => {
  switch (action.type) {
    case "SET_METHOD":
      return action.payload;
    default:
      return method;
  }
};

const urlReducer = (url = "", action) => {
  switch (action.type) {
    case "SET_URL":
      return action.payload;
    default:
      return url;
  }
};

const paramsReducer = (
  params = [{ id: generateRandomID(), key: "", value: "" }],
  action,
) => {
  switch (action.type) {
    case "ADD_PARAMS":
      return [...params, action.payload];
    case "DELETE_PARAMS":
      return [...action.payload];
    case "SET_PARAMS":
      return [...action.payload];
    default:
      return params;
  }
};

const responseDetailReducer = (detail = { status: 0, time: 0 }, action) => {
  switch (action.type) {
    case "SET_DETAIL":
      return { ...action.payload };
    default:
      return detail;
  }
};

const responseReducer = (response = null, action) => {
  switch (action.type) {
    case "SET_RESPONSE":
      return action.payload;
    default:
      return response;
  }
};

const requestJsonReducer = (request = null, action) => {
  switch (action.type) {
    case "SET_REQUEST_JSON":
      return action.payload;
    default:
      return request;
  }
};

const headersReducer = (headers = [], action) => {
  switch (action.type) {
    case "SET_HEADERS":
      return action.payload;
    default:
      return headers;
  }
};
export const allReducers = combineReducers({
  method: methodReducer,
  url: urlReducer,
  params: paramsReducer,
  responseDetail: responseDetailReducer,
  response: responseReducer,
  request: requestJsonReducer,
  headers: headersReducer,
});
