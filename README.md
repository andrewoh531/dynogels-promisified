# dynogels-promisified
I take no credit for this code. It is a fork of [vogels-promisified](https://github.com/servel333/vogels-promisified)
modified to use [Dynogels](https://github.com/clarkie/dynogels) instead of Vogels.

DynamoDB library [Dynogels](https://github.com/clarkie/dynogels) promisified for use with [Bluebird](http://bluebirdjs.com/docs/api-reference.html). This is the exact same functionality
and code as [vogels-promisified](https://github.com/servel333/vogels-promisified) but modified
to use Dynogels.

A drop-in replacement that extends dynogels with `Async` methods.

## Usage

```javascript
var vogels = require("dynogels-promisified");
```

## Example

```javascript
var User = module.exports = vogels.define("User", {
  hashKey : "email",

  timestamps : true,

  schema : {
    _id : vogels.types.uuid(),
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
