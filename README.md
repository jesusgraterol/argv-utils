# argv utils

The `argv-utils` package is a lightweight library for Node.js that simplifies working with command-line arguments passed to your scripts. It streamlines the process of accessing and managing arguments from `process.argv` property.

## Getting Started

Install the library:
```bash
$ npm install -D argv-utils
```

Parse any args:

```bash
$ node my-script.js --one --two="Hello World!" --three --four="false"
```
```typescript
// my-script.js
import { argv } from 'node:process';
import parse from 'argv-utils';

parse(argv);
// {
//    execPath: '/usr/local/bin/node',
//    scriptPath: '/path/to/my-script.js',
//    one: 'true',
//    two: 'Hello World!',
//    three: 'true',
//    four: 'false',
// }
```





<br/>

## Built With

- TypeScript





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Acknowledgments

- ...





<br/>

## Deployment

Install dependencies:
```bash
$ npm install
```


Build the library:
```bash
$ npm start
```


Publish to `npm`:
```bash
$ npm publish
```