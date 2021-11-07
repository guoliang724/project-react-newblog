import { ajax } from "./axios";
import axios from "axios";
const dailySentenceApi = "http://v3.wufazhuce.com:8000/api/channel/one/0/0";
const baseUrl = "";

//get daily sentence
export function getSentence() {
  return axios.get(dailySentenceApi);
}
/*------------------handle blog------------------ */

//get the bloglist
export function getBlogList() {
  return ajax("/blog/list");
}

// get the bloglist by keyword,tags,page
export function getBlogListsByparameters(keyword = "", tag = "all", page = 1) {
  return ajax(`/blog/list/parameter`, { keyword, tag, page }, "post");
}

//create a new blog
export function createNewBlog(title, content, tags, img) {
  return ajax("/blog/new", { title, content, tags, img }, "post");
}

//hanle likes
export function addLikes(id, likes) {
  return ajax("/blog/likes/add", { id, likes }, "post");
}
//get tags
export function getTags() {
  return ajax("/blog/taglist");
}

//add one view on one blog
export function addOneView(id) {
  return ajax("/blog/addview", { id }, "post");
}

/*--------------vertify username and password----------------------- */

export function getUserInfo(username, password) {
  return ajax("/login", { username, password }, "post");
}
