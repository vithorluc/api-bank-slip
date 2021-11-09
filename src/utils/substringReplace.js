/**
 * Auxiliary function to remove leading zeros from detected values ​​in the entered code
 *
 * -------------
 *
 * @param {string} str Text to be verified
 * @param {string} repl Text to replace
 * @param {int} start Starting position
 * @param {int} size Size
 *
 * -------------
 *
 * @return {string} result
 */
const substringReplace = (str, repl, begin, size) => {
  if (begin < 0) {
    begin = begin + str.length;
  }

  size = size !== undefined ? size : str.length;
  if (size < 0) {
    size = size + str.length - begin;
  }

  return [
    str.slice(0, begin),
    repl.substr(0, size),
    repl.slice(size),
    str.slice(begin + size),
  ].join("");
};

export { substringReplace };
