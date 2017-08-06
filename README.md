# Sami Nieminen's portfolio website
Using [react-redux-base](https://github.com/niemisami/react-redux-base) repo as the base for the site.

## What? How?

### Precondition 
Ensure that [`npm`](https://docs.npmjs.com/getting-started/installing-node) is installed.
#### JWT and MongoDB configurations
> MongoDB is commented out from this project 

1. Create a new file `tools/config.json`
2. Add `dbUri` and `jwtSecret` values:
```
{
  'dbUri': 'mongodb://yourmongouri',
  'jwtSecret': 'yourSecretMessage'
}
```
### Usage
```
// Clone the repository:
git clone https://github.com/niemisami/react-redux-base.git
```
```
// Install dependencies
npm install -g babel-cli 
npm install
```
```
// Run
npm start
```
```
// Run without linter
npm run run
```
