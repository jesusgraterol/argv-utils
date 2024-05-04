import { parseArgs } from './parser.js';

/* ************************************************************************************************
 *                                            HELPERS                                             *
 ************************************************************************************************ */

const mockArgv = (args: string[]): string[] => ([
  '/usr/local/bin/node',
  '/path/to/my-script.js',
  ...args,
]);





/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('parseArgs', () => {
  test('can parse a shell script when no args have been provided', () => {
    expect(parseArgs(mockArgv([]))).toStrictEqual({
      execPath: '/usr/local/bin/node',
      scriptPath: '/path/to/my-script.js',
    });
  });

  test('can parse an arg without value', () => {
    const args = parseArgs(mockArgv(['--one']));
    expect(args.one).toBe('true');
  });

  test('can parse an arg with value', () => {
    const args = parseArgs(mockArgv(['--oneVal=Some Cool Value']));
    expect(args.oneVal).toBe('Some Cool Value');
  });

  test('can parse multiple args with and without values', () => {
    const args = parseArgs(mockArgv(['--one', '--two=Hello World!', '--someValue=false']));
    expect(args).toStrictEqual({
      execPath: '/usr/local/bin/node',
      scriptPath: '/path/to/my-script.js',
      one: 'true',
      two: 'Hello World!',
      someValue: 'false',
    });
  });
});
