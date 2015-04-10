var test = require('tape');
var validate = require('../candidate');

var validCandidates = [
  { mid: 'data', candidate: 'a=candidate:2441410931 1 udp 2121670399 172.17.42.1 40992 typ host generation 0' },
  'a=candidate:2441410931 1 udp 2121670399 172.17.42.1 40992 typ host generation 0',
  { sdpMLineIndex:1,sdpMid:'video',candidate:'a=candidate:1399850381 1 udp 1685790463 203.143.175.67 35373 typ srflx raddr 10.17.128.182 rport 50510 generation 0\r\n' },
  'a=candidate:1399850381 1 udp 1685790463 203.143.175.67 35373 typ srflx raddr 10.17.128.182 rport 50510 generation 0',
  'a=candidate:1984741261 1 udp 2122262783 2402:1800:f:6111:b6b6:76ff:fe2a:a8a5 54217 typ host generation 0',
  'a=candidate:1984741261 1 udp 2122262783 2001::9d38:6abd:3806:b1c:7d3d:308b 54217 typ host generation 0',
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
