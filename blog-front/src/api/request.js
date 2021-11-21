import { ajax } from "./axios";
import axios from "axios";
const dailySentenceApi = "http://v3.wufazhuce.com:8000/api/channel/one/0/0";
const baseUrl = "http://blogs.guoliang831.com/api";

//get daily sentence
export function getSentence() {
  return axios.get(dailySentenceApi);
}
/*------------------handle blog------------------ */

//get the bloglist
export function getBlogList() {
  return ajax(baseUrl+ "/blog/list");
}

// get the bloglist by keyword,tags,page
export function getBlogListsByparameters(keyword = "", tag = "all", page = 1) {
  return ajax(baseUrl+ `/blog/list/parameter`, { keyword, tag, page }, "post");
}

//create a new blog
export function createNewBlog(title, content, tags, img) {
  return ajax(baseUrl+"/blog/new", { title, content, tags, img }, "post");
}

//hanle likes
export function addLikes(id, likes) {
  return ajax(baseUrl+"/blog/likes/add", { id, likes }, "post");
}
//get tags
export function getTags() {
  return ajax(baseUrl+"/blog/taglist");
}

//add one view on one blog
export function addOneView(id) {
  return ajax(baseUrl+"/blog/addview", { id }, "post");
}

/*--------------vertify username and password----------------------- */

export function getUserInfo(username, password) {
  return ajax(baseUrl+"/login", { username, password }, "post");
}
