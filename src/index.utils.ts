import { IParsedArg } from './types.js';

/* ************************************************************************************************
 *                                         PARSER HELPERS                                         *
 ************************************************************************************************ */

/**
 * Validity requirements:
 * - the key must begin with two hyphens: '--'
 * - the key must contain only letters; the use of camelCase is recommended
 * - if a value is provided, it must contain at least 1 character
 * @param arg
 * @returns boolean
 */
const isArgValid = (arg: string): boolean => /^--[a-zA-Z]+(=.+)?$/.test(arg);

/**
 * Parses an argument string, turning it into a key:value pair.
 * @param arg
 * @returns IParsedArg
 */
const parseArg = (arg: string): IParsedArg => {
  // init values
  let key: string;
  let value: string;

  // check if the arg has a value
  const valueStartsAt = arg.indexOf('=');
  if (valueStartsAt > 0) {
    key = arg.slice(0, valueStartsAt).replace('--', '');
    value = arg.slice(valueStartsAt + 1);
  } else {
    key = arg.replace('--', '');
    value = 'true';
  }

  // finally, return the parsed arg
  return { key, value };
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  isArgValid,
  parseArg,
};
