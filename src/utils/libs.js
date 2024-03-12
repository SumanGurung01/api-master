export function generateRandomID(length = 5) {
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  var finalID = "";

  for (var i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * character.length);

    finalID += character[randomIndex];
  }

  return finalID;
}

export function generateUrlFromParams(paramsObj) {
  var paramUrl = [];

  for (var i = 0; i < paramsObj.length; i++) {
    if (paramsObj[i].key !== "" && paramsObj[i].value !== "") {
      paramUrl.push(paramsObj[i].key + "=" + paramsObj[i].value);
    }
  }
  return paramUrl.join("&");
}
