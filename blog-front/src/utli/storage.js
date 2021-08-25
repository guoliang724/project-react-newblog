import store from "store";
import jwb from "jsonwebtoken";

const user_id = "token";
export function getUser() {
  var user = store.get(user_id);
  user = jwb.decode(user);
  return user;
}
export function setUser(user_id, token) {
  store.set(user_id, token);
}
