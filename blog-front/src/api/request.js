import { ajax } from "./axios";

const urlApi = "http://v3.wufazhuce.com:8000/api/channel/one/0/0";

//get daily sentence
export function getSentence() {
  return ajax(urlApi);
}
//get the bloglist
export function getBlogList() {
  console.log("getbloglist");
  return ajax("/blog/list");
}
