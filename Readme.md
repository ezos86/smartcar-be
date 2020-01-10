# Smartcar Backend Service
This API service provides data for smartcar challange

# Environment vars
Database

# Pre-requisites
- Install Node.js
- Install npm

# Getting started
- Clone the repository
```
git clone git@bitbucket.org:erik-zume/cobalt-service.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8001`

- API Document endpoints

  swagger-ui  Endpoint : http://localhost:8080/docs 


## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.                            |
| **node_modules**         | Contains all npm dependencies                                                                 |
| **src**                  | Contains source code that will be compiled to the dist dir                                    |
| **src/config**           | Application configuration including environment-specific configs 
| **src/controllers**      | Controllers define functions to serve various express routes. 
| **src/utility**          | Common libraries to be used across your app that provide a conversion or transmutation of value.  
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/resources**        | Resources help to retrieve the data from storage, like PostGres, BiQuery, etc.   |
| **src/services**         | Services help you connect to resources, such as databases. *ONLY* to be used in controllers  |
| **src/index.ts**         | Entry point to express app                                                               |


![alt text](https://i.imgur.com/GCpN0vj.png)

## Variable Control
Consitency amongst file, function and variable names makes it easier to search the codebase when looking for a file, value, or function. It can quickly be understood based on the case, rather it's a function or variable if we follow these assignment rules.

- *File names* should be in kabob case and include the target file type: ex: hello-world.route.ts or hello-world.controller.ts
- *Function names* should be in lower camel case: ex: getPredictionData or updateUser
- *Variable names* should be in snake case: ex: prediction_data or first_name

## Building the project
### Configuring TypeScript compilation
```json
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true
    },
    
    "include": [
      "src/**/*.ts"
      

    ],
    "exclude": [
      "src/**/*.spec.ts",
      "test",
      "node_modules"
    
    ]
  }

```

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `build:copy`                   | copy the *.yaml file to dist/ folder      |
| `build:live`                   | Full build. Runs ALL build tasks       |
| `build:dev`                   | Full build. Runs ALL build tasks with all watch tasks        |
| `dev`                   | Runs full build before starting all watch tasks. Can be invoked with `npm dev`                                         |
| `test`                    | Runs build and run tests using mocha        |
| `lint`                    | Runs TSLint on project files       |


## Testing
The tests are written in Mocha

```
"mocha": "3.4.2",
"chai": "4.1.2",
"chai-http": "3.0.0",

```

### Example application.spec.ts
```
import chaiHttp = require("chai-http")
import * as chai from "chai"
import app from './application'

const expect = chai.expect;
chai.use(chaiHttp);


describe('App', () => {
  it('works', (done:Function): void => {
  chai.request(app)
      .get('/api/hello?greeting=world')
      .send({})
      .end((err:Error, res: any): void => {
          
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.msg).to.be.equal("hello world");
          done();
      });
  
    });
});
```
### Running tests using NPM Scripts
````
npm run test

````
Test files are created under test folder.


# Docs
## Swagger
The swagger specification file is named as swagger.yaml under `/docs`.

# TSLint
TSLint is a code linter that helps catch minor code quality and style issues.

## TSLint rules
All rules are configured through `tslint.json`.


## Running TSLint
To run TSLint you can call the main build script or just the TSLint task.
```
npm run build:live   // runs full build including TSLint
npm run lint  // runs only TSLint
```





