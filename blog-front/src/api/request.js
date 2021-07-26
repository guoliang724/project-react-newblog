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
/*--------------vertify username and password----------------------- */

export function getUserInfo(username, password) {
  return ajax("/login", { username, password }, "post");
}

/*----------------handle comments------------------------- */
export function getComments(article_id) {
  return ajax("/comment", { article_id }, "post");
}
export function addComments(author, content, article_id, comment_id) {
  // the comment is for the article
  if (article_id) {
    return ajax("/comment/add", { author, content, article_id }, "post");
  } else {
    // the comment is for one the comment of the article
    return ajax("/comment/subadd", { author, content, comment_id }, "post");
  }
}
