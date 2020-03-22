# mult_analysis

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

testing.

## Installation

`$ npm i mult_analysis`

## Usage

```js
import library from 'mult_analysis';

const result = library(args);
// result is ...
```

OK :
```
npm install multiplet-analysis
node -r esm examples/test.js
```
this returns:
```
interpolating
J:: 5.15367032864944
J:: 0.8079268967016162
{
  j: [
    { multiplicity: 'd', coupling: 5.15367032864944 },
    { multiplicity: 'd', coupling: 0.8079268967016162 }
  ],
  debug: { steps: [ [Object], [Object], [Object] ] },
  chemShift: 6.336656878700529
}
42
```
...(but this is not the last version of multiplet-analysis)
Not OK:
```
npm link multiplet-analysis
node -r esm examples/test.js
```
returns:
```
/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1
Error: Cannot find module 'multiplet-analysis'. Please verify that the package.json has a valid "main" entry
    at new MAIN_NOT_FOUND (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at zo (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at $o (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at xu (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at wu (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at Eu (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at ku (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at Proxy.<anonymous> (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at Object.<anonymous> (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1)
    at Tu (/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/multiplet_analysis/node_modules/esm/esm.js:1) {
  code: 'MODULE_NOT_FOUND',
  path: '/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_projects/mult_analysis/node_modules/multiplet-analysis/package.json',
  requestPath: 'multiplet-analysis'
}
```

## [API Documentation](https://djeanner.github.io/mult_analysis/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/mult_analysis.svg
[npm-url]: https://www.npmjs.com/package/mult_analysis
[ci-image]: https://github.com/djeanner/mult_analysis/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/djeanner/mult_analysis/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/mult_analysis.svg
[download-url]: https://www.npmjs.com/package/mult_analysis
