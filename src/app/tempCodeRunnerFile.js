var Animal =/** @class */
(function () {
  function Animal(theName) {
    this.name = theName;
  }
  return Animal;
}());

console.log(new Animal("Cat").name)