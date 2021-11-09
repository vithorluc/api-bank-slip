/**
 * Calculates the check digit of a number from module 10
 *
 * -------------
 *
 * @param {string} number Numbering
 *
 * -------------
 *
 * @return {string} sum
 */
const calculateMod10 = (number) => {
  number = number.replace(/\D/g, "");
  var i;
  var mult = 2;
  var sum = 0;
  var s = "";

  for (i = number.length - 1; i >= 0; i--) {
    s = mult * parseInt(number.charAt(i)) + s;
    if (--mult < 1) {
      mult = 2;
    }
  }
  for (i = 0; i < s.length; i++) {
    sum = sum + parseInt(s.charAt(i));
  }
  sum = sum % 10;
  if (sum != 0) {
    sum = 10 - sum;
  }
  return sum;
};

export { calculateMod10 };
