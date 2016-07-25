# dynogels-promisified
I take no credit for this code. It is a fork of [dyn-promisified](https://github.com/servel333/dyn-promisified)
modified to use [Dynogels](https://github.com/clarkie/dynogels) instead of dyn.

This package promisifies the APIs in [Dynogels](https://github.com/clarkie/dynogels) using [Bluebird](http://bluebirdjs.com/docs/api-reference.html) using the default 'Async' appendix to the original
method names.

## Usage

```javascript
var dynogels = require("dynogels-promisified");
```

## Example

```javascript
var User = module.exports = dyn.define("User", {
  hashKey : "email",

  timestamps : true,

  schema : {
    _id : dyn.types.uuid(),
    email : Joi.string().email(),
  },
});

User
  .getAsync(email)
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });

User
  .scan()
  .where("_id").equals(userId)
  .execAsync()
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });
```
