module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};

//what is module.exports find out how to convert it for ES6.
//ES6 needs to be in your language stack
