[![Build Status](https://travis-ci.org/oculus42/eslint-plugin-various.svg?branch=master)](https://travis-ci.org/oculus42/eslint-plugin-various)


# eslint-plugin-various

Disallow various functions for XSS and code quality reasons.  
Forked from [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-various`:

```
$ npm install eslint-plugin-various --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-various` globally.

## Usage

Add `various` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "various"
  ],
  "rules": {
    "various/no-jquery-html": 1,
    "various/no-empty-jquery-html": 2
  }
}
```

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
