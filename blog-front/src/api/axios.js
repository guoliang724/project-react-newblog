const axios = require("axios");

export function ajax(url, body = {}, method = "get") {
  if (method === "post") {
    return axios.post(url, body);
  } else {
    return axios.get(url, {
      params: body,
    });
  }
}
