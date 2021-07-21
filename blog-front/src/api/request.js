import { ajax } from "./axios";
import axios from "axios";
const urlApi = "http://v3.wufazhuce.com:8000/api/channel/one/0/0";

//get daily sentence
export function getSentence() {
  return axios.get(urlApi);
}
//get the bloglist with page
export function getBlogListWithPage(page) {
  return ajax(`/blog/list${page}`);
}

//get the bloglist
export function getBlogList() {
  return ajax("/blog/list");
}

//vertify username and password
export function getUserInfo(username, password) {
  return ajax("/login", { username, password }, "post");
}

//create a new blog
export function createNewBlog(title, content, tags, img) {
  return ajax("/blog/new", { title, content, tags, img }, "post");
}
