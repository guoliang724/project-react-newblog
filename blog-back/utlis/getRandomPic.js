var i = Math.ceil(Math.random() * 10);
function getRandomPic() {
  var picPath = `http://localhost:5000/public/avatar/${i}.jpg`;
  return picPath;
}

module.exports = getRandomPic;
