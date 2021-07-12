const axios = require("axios");

export function ajax(url, body = {}, method = "get") {
  axios.defaults.headers.post["x-auth"] = localStorage.getItem("token");
  axios.interceptors.response.use(
    (resp) => {
      if (resp.headers["x-auth"])
        localStorage.setItem("token", resp.headers["x-auth"]);
      return resp;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  if (method === "post") {
    return axios.post(url, body);
  } else {
    return axios.get(url, {
      params: body,
    });
  }
}

export const url = "url";
