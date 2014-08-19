var test = require('tape');
var validate = require('../candidate');

var validCandidates = [
  { mid: 'data', candidate: 'a=candidate:2441410931 1 udp 2121670399 172.17.42.1 40992 typ host generation 0' },
  'a=candidate:2441410931 1 udp 2121670399 172.17.42.1 40992 typ host generation 0'
];
var invalidCandidates = [
  { mid: 'data', candidate: 'a=candidate:2365396244 1 udp 1853300479 10.17.131.21 59229 typ  raddr 172.17.42.1 rport 59229 generation 0' },
  'a=candidate:2365396244 1 udp 1853300479 10.17.131.21 59229 typ  raddr 172.17.42.1 rport 59229 generation 0'
];

test('valid candidates pass validation', function(t) {
  t.plan(validCandidates.length);

  validCandidates.forEach(function(candidate) {
    t.equal(validate(candidate).length, 0, 'validated ok');
  });
});

test('invalid candidates are detected', function(t) {
  t.plan(invalidCandidates.length);

  invalidCandidates.forEach(function(candidate) {
    var errors = validate(candidate);

    t.ok(errors.length > 0, 'validation error detected');
  });
});
