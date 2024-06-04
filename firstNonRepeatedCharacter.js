/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
const firstNonRepeatedCharacter = function (string) {
  var res=''
for (var i= 0; i< string.length; i++) {
  var caracter = string[i];
if(string.indexOf(caracter)===string.lastIndexOf(caracter)){
  return caracter
}  
}
return ''
}



//   var acc=''
 
//   var res = null;
//   for (var character of string) {
//       if (
//           string.indexOf(character)
//           ===
//           string.lastIndexOf(character)
//       ) {
//           res = character;
//           break;
//       }
//   }
//   console.log("Input: " + string);
//   console.log("Non-repeating character: " + res);
// }



