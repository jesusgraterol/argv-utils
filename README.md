# argv Utils

The `argv-utils` package is a lightweight library for Node.js that simplifies working with command-line arguments passed to your scripts. It streamlines the process of accessing and managing arguments from `process.argv` property.

## Getting Started

Install the package:
```bash
npm install -D argv-utils
```

### Examples

Extract the arguments passed to the `my-file.js` script:
```bash
node my-file.js --one --two="Hello World!" --someValue="false"
```
```typescript
// my-file.js
import { argv } from 'node:process';
import { parseArgs } from 'argv-utils';

parseArgs(argv);
// {
//    execPath: '/usr/local/bin/node',
//    scriptPath: '/path/to/my-script.js',
//    one: 'true',
//    two: 'Hello World!',
//    someValue: 'false',
// }
```




<br/>

## Types
```typescript
/**
 * Base Parsed Args
 * The args that will always be present when a Node.js process is launched; taking the indexes 0 and 1 in the vector.
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
```

If you wish to enforce strong typing in your script, extend the base type as follows:
```typescript
interface IMyScriptArgs extends IBaseParsedArgs {
  src?: string,
  init?: 'true',
  development?: 'true',
  staging?: 'true',
  production?: 'true',
}
```


<br/>

## Built With

- TypeScript




<br/>

## Running the Tests

```bash
npm run test:unit
```





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Deployment

Install dependencies:
```bash
npm install
```


Build the library:
```bash
npm start
```


Publish to `npm`:
```bash
npm publish
```