import { IBaseParsedArgs, IParsedArgs } from './shared/types.js';
import { isArgValid, parseArg } from './utils/index.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Parses the shell arguments from the process.argv property and returns them in an object.
 * @param argv
 * @returns IParsedArgs
 */
const parseArgs = (argv: string[]): IParsedArgs => ({
  execPath: argv[0],
  scriptPath: argv[1],
  ...argv.reduce(
    (prev, current) => {
      if (isArgValid(current)) {
        const { key, value } = parseArg(current);
        return { ...prev, [key]: value };
      }
      return prev;
    },
    <{ [argKey: string]: string }>{},
  ),
});




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  parseArgs,
  type IBaseParsedArgs,
  type IParsedArgs,
};
