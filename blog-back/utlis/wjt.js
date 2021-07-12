const jwt = require("jsonwebtoken");

exports.publish = (res, maxAge, payload) => {
  var token = jwt.sign(payload, "guoliang", {
    expiresIn: maxAge,
  });
  //insert to cookie
  res.cookie("x-auth", token, {
    maxAge: maxAge * 1000,
    path: "/",
  });
  //inset to headers
  res.header("x-auth", token);
  res.send({
    status: 1,
    data: token,
  });
};
exports.verify = (req) => {
  let token;
  token = req.cookies["x-auth"];
  if (token) {
    token = req.headers["x-auth"];
    if (!token) return null;
  }
  try {
    var result = jwt.verify(token, "guoliang");
    return {
      status: 1,
      data: result,
    };
  } catch {
    return null;
  }
};
