/**
 * Calculates the check digit of a number from module 11
 *
 * -------------
 *
 * @param {string} x Numbering
 *
 * -------------
 *
 * @return {string} type
 */
const calculateMod11 = (x) => {
  let sequence = [4, 3, 2, 9, 8, 7, 6, 5];
  let digit = 0;
  let j = 0;
  let DAC = 0;

  for (var i = 0; i < x.length; i++) {
    let mult = sequence[j];
    j++;
    j %= sequence.length;
    digit += mult * parseInt(x.charAt(i));
  }

  DAC = digit % 11;

  if (DAC == 0 || DAC == 1) return 0;
  if (DAC == 10) return 1;

  return 11 - DAC;
};

export { calculateMod11 };
