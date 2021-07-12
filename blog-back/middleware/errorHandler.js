module.exports = (error, req, res, next) => {
  if (error) {
    var errorObj = {
      status: 0,
      msg: error instanceof Error ? error.message : error,
    };
    res.status(500).send(errorObj);
  } else {
    next();
  }
};
