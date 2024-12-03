# argv Utils

The `argv-utils` package is a lightweight library for Node.js that simplifies working with command-line arguments passed to your scripts. It streamlines the process of accessing and managing arguments from `process.argv` property.

## Getting Started

Install the package:
```bash
npm install -D argv-utils
```

Manage your arguments with ease:
```bash
node my-script.js --one --two="Hello World!" --someValue="false"
```
```typescript
// my-script.js
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

## Built With

- JavaScript / TypeScript




<br/>

## Running the Tests

```bash
npm run test:unit
```





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Acknowledgments

- ...





<br/>

## @TODOS

- [ ] ...





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