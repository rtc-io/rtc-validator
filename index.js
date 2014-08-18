/**
  # rtc-validator

  This is a collection of validation routines for validating different apsects
  of WebRTC.

  ## Usage

  All of the validator modules in this package export a single function which
  uses the following function signature:

  ```
  fn(topic) -> []
  ```

  Whereas a normal validator function might return a value of `true` for no
  problems, these validator functions return an array of errors encountered
  while validating the `topic`.

  This provides the ability to use the validators in the following way:

  ```
  TODO: include example
  ```

  ## Reference
**/

/**
  ### `validator.ok(errors)`

  Return whether the result of a validator passes the "ok" test, i.e. no
  errors were returned.

**/
exports.ok = function(errors) {
  return Array.isArray(errors) && errors.length === 0;
};

exports.candidate = require('./candidate');
