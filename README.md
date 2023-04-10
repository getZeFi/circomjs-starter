# circomjs-starter

The repository contains some boilerplate code to get started with [CircomJS](https://github.com/getZeFi/circomjs).

You should check out [this](https://zefi.gitbook.io/circomjs/introduction/getting-started) section of the docs to get-started with using this starter repository.

Here is the current structure of this repository.

- **circuits**: contains two circuits addition.circom and multiplication.circom, they generate proofs of valid addition and multiplication of two numbers respectively.
- **src**: contains a javascript files, that uses [CircomJS](https://github.com/getZeFi/circomjs) to do the following:
  - compile circuits
  - generate proof
  - verify proof
- **circuit.config.json**: [configuration file](https://zefi.gitbook.io/circomjs/circuit-config-file/circuit-config-file) for CircomJS.

## See it in action

You can do the following to see CircomJS in action:

### npm install

install all npm packages:
```shell
npm install
```

### run javascript file

run the javascript file using CircomJS.

```shell
node src/index.js
```
