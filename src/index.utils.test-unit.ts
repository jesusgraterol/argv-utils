import { isArgValid, parseArg } from './index.utils.js';

/* ************************************************************************************************
 *                                      PARSER HELPERS TESTS                                      *
 ************************************************************************************************ */

describe('isArgValid', () => {
  test('can determine when an arg is valid', () => {
    expect(isArgValid('--testArg')).toBeTruthy();
    expect(isArgValid('--testArg=Hello World!')).toBeTruthy();
  });

  test('can determine when an arg is invalid', () => {
    expect(isArgValid('-test-arg')).toBeFalsy();
    expect(isArgValid('test-arg=Hello World!')).toBeFalsy();
    expect(isArgValid('test-arg=Hello World!--')).toBeFalsy();
    expect(isArgValid('--')).toBeFalsy();
    expect(isArgValid('--test--')).toBeFalsy();
    expect(isArgValid('--test-arg')).toBeFalsy();
    expect(isArgValid('--test-arg=SomeValue')).toBeFalsy();
  });
});

describe('parseArg', () => {
  test('can parse an argument that has no value', () => {
    expect(parseArg('--testArg')).toStrictEqual({ key: 'testArg', value: 'true' });
  });
  test('can parse an argument that has value', () => {
    expect(parseArg('--testArg=Some Test Value')).toStrictEqual({
      key: 'testArg',
      value: 'Some Test Value',
    });
  });
});
