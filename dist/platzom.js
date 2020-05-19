"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = platzom;

function platzom(str) {
  var translation = str; //si la palabra termina en ar se le quita ar

  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  } //si la palabra inicia con z se añade "pe" al final


  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  } //si la palabra traducida tiene 10 o mas letras se parte a la mitad y se une con -


  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(secondHalf);
  } //si la palabra original es un palindromo ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayusculas y minusculas


  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);

      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}