/* ************************************************************************************************
 *                                         PARSER TYPES                                           *
 ************************************************************************************************ */

/**
 * Base Parsed Args
 * The args that will always be present when a Node.js process is launched; taking the indexes 0 and
 * 1 in the vector.
 */
interface IBaseParsedArgs {
  // the absolute pathname of the executable that started the Node.js process
  execPath: string,

  // the path to the JavaScript file being executed
  scriptPath: string,
}

/**
 * Parsed Args
 * The arguments provided by the process.argv property when running a script from the shell.
 */
interface IParsedArgs extends IBaseParsedArgs {
  // the rest of the extracted arguments
  [argKey: string]: string
}

/**
 * Parsed Arg
 * The object that is generated when a valid argument is parsed.
 */
interface IParsedArg {
  key: string,
  value : string
}




/* ************************************************************************************************
 *                                        MODULE EXPORTS                                          *
 ************************************************************************************************ */
export {
  IBaseParsedArgs,
  IParsedArgs,
  IParsedArg,
};
