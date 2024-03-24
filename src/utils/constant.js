export const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const statusCodes = {
  100: {
    description: "Continue",
    category: "Informational",
  },
  101: {
    description: "Switching Protocols",
    category: "Informational",
  },
  102: {
    description: "Processing",
    category: "Informational",
  },
  103: {
    description: "Early Hints",
    category: "Informational",
  },
  200: {
    description: "OK",
    category: "Success",
  },
  201: {
    description: "Created",
    category: "Success",
  },
  202: {
    description: "Accepted",
    category: "Success",
  },
  203: {
    description: "Non-Authoritative Information",
    category: "Success",
  },
  204: {
    description: "No Content",
    category: "Success",
  },
  205: {
    description: "Reset Content",
    category: "Success",
  },
  206: {
    description: "Partial Content",
    category: "Success",
  },
  207: {
    description: "Multi-Status",
    category: "Success",
  },
  208: {
    description: "Already Reported",
    category: "Success",
  },
  226: {
    description: "IM Used",
    category: "Success",
  },
  300: {
    description: "Multiple Choices",
    category: "Redirection",
  },
  301: {
    description: "Moved Permanently",
    category: "Redirection",
  },
  302: {
    description: "Found",
    category: "Redirection",
  },
  303: {
    description: "See Other",
    category: "Redirection",
  },
  304: {
    description: "Not Modified",
    category: "Redirection",
  },
  305: {
    description: "Use Proxy",
    category: "Redirection",
  },
  307: {
    description: "Temporary Redirect",
    category: "Redirection",
  },
  308: {
    description: "Permanent Redirect",
    category: "Redirection",
  },
  400: {
    description: "Bad Request",
    category: "Client Error",
  },
  401: {
    description: "Unauthorized",
    category: "Client Error",
  },
  402: {
    description: "Payment Required",
    category: "Client Error",
  },
  403: {
    description: "Forbidden",
    category: "Client Error",
  },
  404: {
    description: "Not Found",
    category: "Client Error",
  },
  405: {
    description: "Method Not Allowed",
    category: "Client Error",
  },
  406: {
    description: "Not Acceptable",
    category: "Client Error",
  },
  407: {
    description: "Proxy Authentication Required",
    category: "Client Error",
  },
  408: {
    description: "Request Timeout",
    category: "Client Error",
  },
  409: {
    description: "Conflict",
    category: "Client Error",
  },
  410: {
    description: "Gone",
    category: "Client Error",
  },
  411: {
    description: "Length Required",
    category: "Client Error",
  },
  412: {
    description: "Precondition Failed",
    category: "Client Error",
  },
  413: {
    description: "Payload Too Large",
    category: "Client Error",
  },
  414: {
    description: "URI Too Long",
    category: "Client Error",
  },
  415: {
    description: "Unsupported Media Type",
    category: "Client Error",
  },
  416: {
    description: "Range Not Satisfiable",
    category: "Client Error",
  },
  417: {
    description: "Expectation Failed",
    category: "Client Error",
  },
  418: {
    description: "I'm a teapot",
    category: "Client Error",
  },
  421: {
    description: "Misdirected Request",
    category: "Client Error",
  },
  422: {
    description: "Unprocessable Entity",
    category: "Client Error",
  },
  423: {
    description: "Locked",
    category: "Client Error",
  },
  424: {
    description: "Failed Dependency",
    category: "Client Error",
  },
  425: {
    description: "Too Early",
    category: "Client Error",
  },

  426: {
    description: "Upgrade Required",
    category: "Client Error",
  },
  428: {
    description: "Precondition Required",
    category: "Client Error",
  },
  429: {
    description: "Too Many Requests",
    category: "Client Error",
  },
  431: {
    description: "Request Header Fields Too Large",
    category: "Client Error",
  },
  451: {
    description: "Unavailable For Legal Reasons",
    category: "Client Error",
  },
  500: {
    description: "Internal Server Error",
    category: "Server Error",
  },
  501: {
    description: "Not Implemented",
    category: "Server Error",
  },
  502: {
    description: "Bad Gateway",
    category: "Server Error",
  },
  503: {
    description: "Service Unavailable",
    category: "Server Error",
  },
  504: {
    description: "Gateway Timeout",
    category: "Server Error",
  },
  505: {
    description: "HTTP Version Not Supported",
    category: "Server Error",
  },
  506: {
    description: "Variant Also Negotiates",
    category: "Server Error",
  },
  507: {
    description: "Insufficient Storage",
    category: "Server Error",
  },
  508: {
    description: "Loop Detected",
    category: "Server Error",
  },
  510: {
    description: "Not Extended",
    category: "Server Error",
  },
  511: {
    description: "Network Authentication Required",
    category: "Server Error",
  },
};
