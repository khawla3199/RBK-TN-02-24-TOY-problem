
 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 *


function commonCharacters(a,b){
    let res = ''
    let vue = {}
    for (let i of a) {
        if (!vue[i] && b.includes(i) && i !== ' ') {
            res += i;
            vue[i] = true;
            }
            }
            return res;
}