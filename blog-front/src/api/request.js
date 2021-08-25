import { ajax } from "./axios";
import axios from "axios";
const urlApi = "http://v3.wufazhuce.com:8000/api/channel/one/0/0";

//get daily sentence
export function getSentence() {
  return axios.get(urlApi);
}
/*------------------handle blog------------------ */

//get the bloglist with page
export function getBlogListWithPage(page) {
  return ajax(`/blog/list${page}`);
}

//get the bloglist
export function getBlogList() {
  return ajax("/blog/list");
}

//create a new blog
export function createNewBlog(title, content, tags, img) {
  return ajax("/blog/new", { title, content, tags, img }, "post");
}

//hanle likes
export function addLikes(id, likes) {
  return ajax("/blog/likes/add", { id, likes }, "post");
}

/*--------------vertify username and password----------------------- */

export function getUserInfo(username, password) {
  return ajax("/login", { username, password }, "post");
}

/*----------------handle comments------------------------- */

export function getComments() {
  return ajax("/comment");
}
export function addComments(author, content, article_id) {
  return ajax("/comment/add", { author, content, article_id }, "post");
}
