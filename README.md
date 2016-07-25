# dynogels-promisified
I take no credit for this code. It is inspired by [vogels-promisified](https://github.com/servel333/vogels-promisified)
but modified to use [Dynogels](https://github.com/clarkie/dynogels).

This package promisifies the functions in [Dynogels](https://github.com/clarkie/dynogels) using [Bluebird](http://bluebirdjs.com/docs/api-reference.html) using the default 'Async' suffix. i.e. all methods in
Dynogels are modified with an 'Async' suffix.

## Usage

```javascript
var dynogels = require("dynogels-promisified");
```

## Example

```javascript
var User = module.exports = dynogels.define("User", {
  hashKey : "userId",
  timestamps : false,
  schema : {
    userId: dynogels.types.uuid(),
    name: Joi.string(),
  },
});

User
  .getAsync(userId)
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });

User
  .scan()
  .where("userId").equals(userId)
  .execAsync()
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });
```
